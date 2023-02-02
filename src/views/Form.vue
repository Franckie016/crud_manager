<template>
    <div class="d-flex mb-2">
        <h5 class="card-title flex-grow-1">Formulaire de création de nouvel étudiant</h5>
    </div>
    <form class="row g-3">
        <div class="col-6">
            <label for="inputName" class="form-label">Nom(s)</label>
            <input required type="text" class="form-control" id="inputName" v-model="this.form.name" />
        </div>
        <div class="col-6">
            <label for="inputFirstname" class="form-label">Prénom(s)</label>
            <input required type="text" class="form-control" id="inputFirstname" v-model="this.form.firstName" />
        </div>
        <div class="col-6">
            <label for="inputDatenaissance" class="form-label">Date de naissance</label>
            <input required type="date" class="form-control" id="inputDatenaissance" v-model="this.form.birthday" />
        </div>
        <div class="col-6">
            <label for="selectNiveauScolaire" class="form-label">Niveau scolaire</label>
            <select required id="selectNiveauScolaire" class="form-select" v-model="this.form.schoolLevel">
                <option value=""></option>
                <option value="Terminal A">Terminal A</option>
                <option value="Terminal D">Terminal D</option>
                <option value="Terminal C">Terminal C</option>
                <option value="Première A">Première A</option>
                <option value="Première D">Première D</option>
                <option value="Première C">Première C</option>
                <option value="Seconde A">Seconde A</option>
                <option value="Seconde C">Seconde C</option>
            </select>
        </div>

        <div class="col-12">
            <button @click.prevent="handleClick" type="submit" class="btn btn-primary"><i class="fas fa-save"></i>Créer</button>
            <router-link tag="button" to="/studentList" class="btn btn-danger ms-2"><i class="fas fa-backspace"></i> Retouner à la liste</router-link>
        </div>
    </form>
</template>

<script>
import store from "../store";

export default {
    store: store,
    data() {
        return {
            form: {},
        };
    },

    methods: {
        handleClick() {
            store.commit("ADD_STUDENT", this.form);
            this.form = {
                name: "",
                firstName: "",
                birthday: "",
                schoolLevel: "",
            };
        },
    },
};
</script>

<style></style>
