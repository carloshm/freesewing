import freesewing from "freesewing";
import base from "./base";
import * as shared from "./shared";

var front = {
  draft: function(part) {
    // prettier-ignore
    let {store, sa, Point, points, Path, paths, Snippet, snippets, options, measurements, complete, paperless, macro} = part.shorthand();

    // Cut arm a bit deeper at the front
    let deeper = measurements.chestCircumference * options.frontArmholeDeeper;
    points.armholePitchCp1.x -= deeper;
    points.armholePitch.x -= deeper;
    points.armholePitchCp2.x -= deeper;

    // Rename cb (center back) to cf (center front)
    for (let key of ["Neck", "Shoulder", "Armhole", "Waist", "Hips"]) {
      points[`cf${key}`] = new Point(
        points[`cb${key}`].x,
        points[`cb${key}`].y
      );
      delete points[`cb${key}`];
    }

    // Adapt neck opening
    points.cfNeck = points.cfNeck.shift(-90, points.neck.x);
    points.neckCp2 = points.cfNeck.shift(0, points.neck.x * 0.7);

    // Seamline
    paths.saBase = shared.saBase("front", points, Path);
    paths.seam = new Path()
      .move(points.cfNeck)
      .line(points.cfHips)
      .join(paths.saBase)
      .attr("class", "fabric");

    // Store lengths to fit sleeve
    store.set("frontArmholeLength", shared.armholeLength(points, Path));
    store.set(
      "frontShoulderToArmholePitch",
      shared.shoulderToArmholePitch(points, Path)
    );

    // Complete pattern?
    if (complete) {
      macro("cutonfold", {
        from: points.cfNeck,
        to: points.cfHips,
        grainline: true
      });
      macro("title", { at: points.title, nr: 1, title: "front" });
      snippets.armholePitchNotch = new Snippet("notch", points.armholePitch);
      if (sa) {
        paths.sa = paths.saBase
          .offset(sa)
          .attr("class", "fabric sa")
          .line(points.cfNeck)
          .move(points.cfHips);
        paths.sa.line(paths.sa.start());
      }
    }

    // Paperless?
    if (paperless) {
      shared.dimensions(macro, points, Path, sa);
      macro("hd", {
        from: points.cfHips,
        to: points.hips,
        y: points.hips.y + sa + 15
      });
      macro("vd", {
        from: points.cfHips,
        to: points.cfNeck,
        x: points.cfHips.x - sa - 15
      });
      macro("hd", {
        from: points.cfNeck,
        to: points.neck,
        y: points.neck.y - sa - 15
      });
      macro("hd", {
        from: points.cfNeck,
        to: points.shoulder,
        y: points.neck.y - sa - 30
      });
    }

    return part;
  }
};

export default front;
