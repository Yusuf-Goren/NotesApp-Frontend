export default class APIService {
  static Login(body) {
    return fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static Register(body) {
    return fetch("http://127.0.0.1:5000/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  static getNotes(token) {
    return fetch("http://127.0.0.1:5000/note/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    }).then((resp) => resp.json());
  }

  static addNote(body) {
    return fetch("http://127.0.0.1:5000/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": body.token,
      },
      body: JSON.stringify(body),
    }).then((resp) => console.log(resp));
  }

  static editNote(token, id, body) {
    return fetch(`http://127.0.0.1:5000/edit/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(body),
    }).then((resp) => resp.json());
  }

  static findNote(token, searchText) {
    return fetch("http://127.0.0.1:5000/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify({ searchText }),
    }).then((resp) => resp.json());
  }

  static deleteNote(token, id) {
    return fetch(`http://127.0.0.1:5000/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    });
  }
}
