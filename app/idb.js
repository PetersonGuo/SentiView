export function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("FormDataDB", 1);

        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            db.createObjectStore("forms", { keyPath: "id" });
        };

        request.onerror = function (event) {
            reject("Database error: " + event.target.errorCode);
        };

        request.onsuccess = function (event) {
            resolve(event.target.result);
        };
    });
}

export async function deleteFormData(id) {
    const db = await openDatabase();
    const tx = db.transaction('forms', 'readwrite');
    const store = tx.objectStore('forms');
    const request = store.delete(id);

    return new Promise((resolve, reject) => {
        request.onsuccess = function () {
            resolve();
        };

        request.onerror = function (event) {
            reject('Error deleting form data: ' + event.target.errorCode);
        };
    });
}
