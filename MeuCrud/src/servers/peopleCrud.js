import { API_URL } from "./configApi";

export async function getPeople() {
    const response = await fetch(`${API_URL}/people`);
    if (!response.ok) {
        throw new Error('Erro ao buscar pessoas');
    }
    const data = await response.json();
    return data;
}

export async function createPerson(person) {
    const response = await fetch(`${API_URL}/people`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });
    if (!response.ok) {
        throw new Error('Erro ao criar pessoa');
    }
    return response.json();
}

export async function updatePerson(id, person) {
    const response = await fetch(`${API_URL}/people/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person)
    });
    if (!response.ok) {
        throw new Error('Erro ao atualizar pessoa');
    }
    return response.json();
}

export async function deletePerson(id) {
    const response = await fetch(`${API_URL}/people/${id}`, {
        method: "DELETE"
    });
    if (!response.ok) {
        throw new Error('Erro ao deletar pessoa');
    }
}
    