<template>
  <div>
    <div class="d-flex mb-2">
      <h5 class="card-title flex-grow-1">Liste des étudiants</h5>
      <div class="d-flex">
        <router-link to="/form" class="btn btn-link d-block">
          <i class="fas fa-user-plus"></i> Ajouter un nouvel étudiant</router-link
        >
        <input type="text" name="" id="" class="form-control" />
      </div>
    </div>
    <table class="table table-bordered table-striped">
      <thead>
        <th class="text-center">Nom(s)</th>
        <th class="text-center">Prénom(s)</th>
        <th class="text-center">Date de naissance</th>
        <th class="text-center">Niveau Scolaire</th>
        <th class="text-center">Action</th>
      </thead>
      <tbody>
      <tr v-if="$store.state.forms == 0"><td colspan="5" class="text-center">Aucun étudiant inscrit</td></tr>
        <tr v-for="(student, index) in $store.state.forms" :key="index">
          <td class="text-center">{{ student.name }}</td>
          <td class="text-center">{{ student.firstName }}</td>
          <td class="text-center">{{ student.birthday }}</td>
          <td class="text-center">{{ student.schoolLevel }}</td>
          <td class="text-center">
            <!-- boutton pour modifier l'à propos de l'edutiant
                <button class="btn btn-link"><i class="fas fa-edit"></i></button>
            -->
            <button class="btn btn-link" @click="removeStudent(student)">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from "../store";
import StudentDB from "../store/webStorage.js";

const studentDb = new StudentDB("ArrayStorage");

export default {
  store: store,
  methods: {
    removeStudent(value) {
        store.commit("REMOVE_STUDENT", value)
    },
  },
};
</script>

<style lang="scss" scoped></style>
