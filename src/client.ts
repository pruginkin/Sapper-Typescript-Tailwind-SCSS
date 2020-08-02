import * as sapper from "@sapper/app";

// sapper.start({
//   target: document.querySelector("#sapper"),
// });
let target = document.querySelector("#sapper");

if (target) {
  sapper.start({
    target: target,
  });
}
