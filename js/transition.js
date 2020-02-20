import Highway from "@dogstudio/highway";
import { TimelineLite } from "gsap";

class Fade extends Highway.Transition {
  in({ from, to, done }) {
    const tl = new TimelineLite();
    tl.fromTo(to, 1, { right: "-100%", top: "50vh" }, { left: "2%" }).fromTo(
      to,
      1,
      { height: "1vh" },
      {
        height: "100vh",
        top: "0vh",
        onComplete: function() {
          done();
        }
      }
    );
  }
  out({ from, done }) {
    done();
  }
}

export default Fade;
