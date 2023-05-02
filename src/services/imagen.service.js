import firebase from "../firebase";

const db = firebase.collection("/Imagenes");

class ImagenDataService {
  getAll() {
    return db;
  }

  create(imagen) {
    return db.add(imagen);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new ImagenDataService();