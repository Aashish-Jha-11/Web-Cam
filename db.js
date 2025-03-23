let db;
let openRequest = indexedDB.open("myDataBase");
openRequest.addEventListener("success", (e) => {
  console.log("DB Success");
  db = openRequest.result;
});

openRequest.addEventListener("error", (e) => {
  console.log("DB error");
});

openRequest.addEventListener("upgradeneeded", (e) => {
  console.log("db upgraded");

  console.log(openRequest.result);
  db = openRequest.result;

  // keypath id - unique term

  db.createObjectStore("video", { keyPath: "id" });
  db.createObjectStore("image", { keyPath: "id" });
});
