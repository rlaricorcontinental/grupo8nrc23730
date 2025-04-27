/**
 * Firestore ORM Lite - Versión sin dependencias
 */
class FirestoreORM {
    constructor(collectionName) {
      this.collectionName = collectionName;
      this.db = firebase.firestore();
    }
    // Obtener referencia a la colección
    get collection() {
      return this.db.collection(this.collectionName);
    }
    // Crear nuevo documento
    async create(data) {
      const docRef = await this.collection.add(data);
      return this.getById(docRef.id);
    }
    // Obtener documento por ID
    async getById(id) {
      const doc = await this.collection.doc(id).get();
      return doc.exists ? { id: doc.id, ...doc.data() } : null;
    }
    // Actualizar documento
    async update(id, data) {
      await this.collection.doc(id).update(data);
      return this.getById(id);
    }
    // Eliminar documento
    async delete(id) {
      await this.collection.doc(id).delete();
      return true;
    }
    // Consultar documentos
    async query(field, operator, value) {
      const snapshot = await this.collection.where(field, operator, value).get();
      return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
    // Escuchar cambios en tiempo real
    onSnapshot(callback) {
      return this.collection.onSnapshot(snapshot => {
        const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        callback(docs);
      });
    }
}