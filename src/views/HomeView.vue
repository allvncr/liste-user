<template>
  <main>
    <header>
      <h1>Conférence économique des anciens élèves 2023</h1>
      <p>12-14 mai 2023 | Penn State University</p>
    </header>

    <hr />
    <section id="about">
      <p>
        L'Alumni Economics Conference de PennState est un événement qui
        rassemble les professeurs, les anciens élèves et les étudiants de Penn
        State pour partager leurs leurs recherches, leurs points de vue et leurs
        idées.
      </p>
    </section>

    <hr />
    <section id="schedule">
      <h2>Programme des conférences</h2>
      <p>Bientôt...</p>
    </section>
    <hr />
    <section id="submission">
      <h2>Soumission d'article</h2>
      <p>Soumettez votre article de recherche pour la conférence.</p>
    </section>
    <form id="pdf-form" @submit.prevent="sauvegarde">
      <div class="form-input">
        <label for="author">Nom de l'auteur :</label>
        <input
          type="text"
          id="author"
          name="author"
          v-model="form.author"
          required
          ref="fileInput"
        />
      </div>

      <div class="form-input">
        <label for="title">Titre du document :</label>
        <input type="text" id="title" name="title" v-model="form.title" />
      </div>

      <div class="form-input">
        <label for="abstract">Résumé :</label>
        <textarea
          id="abstract"
          name="abstract"
          v-model="form.abstract"
          required
        ></textarea>
      </div>

      <div class="form-input">
        <label for="pdf-input"
          >Sélectionnez (votre papier) le fichier PDF :</label
        >
        <input
          type="file"
          id="pdf-input"
          name="pdf"
          accept=".pdf, image/*, .doc, .docx, .txt"
          @change="onFileSelected"
        />
      </div>

      <div class="submit">
        <button type="submit">Soumettre</button>
      </div>
    </form>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {
        author: null,
        title: null,
        abstract: null,
        file: null,
      },
    }
  },

  computed: {
    ...mapGetters([]),
  },

  methods: {
    ...mapActions(['store_user']),
    onFileSelected(event) {
      const file = event.target.files[0]
      if (file) {
        const fileUrl = URL.createObjectURL(file)
        this.form.file = fileUrl
      }
    },
    sauvegarde() {
      this.store_user(this.form).then(() => {
        this.form = {
          author: null,
          title: null,
          abstract: null,
          file: null,
        }
        alert('Save !')
      })
    },
  },
}
</script>

<style lang="scss" scoped>
/* Reset default browser styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Set body background color and font */
body {
  background-color: #f2f2f2;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}

/* Style the header section */
header {
  background-color: #202c3e;
  color: #fff;
  padding: 20px;
  text-align: center;
}

header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: uppercase;
}

header p {
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 10px;
}

/* Style the main section */
main {
  max-width: 960px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

main h2 {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-align: center;
}

main p {
  margin-bottom: 20px;
  font-size: 1.1rem;
  font-weight: 400;
}

/* Style the footer section */
footer {
  background-color: #202c3e;
  color: #fff;
  padding: 20px;
  text-align: center;
}

footer p {
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 10px;
}

.form-input {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;

  label {
    flex: 1;
  }

  input,
  textarea {
    flex: 3;
    width: 80%;
    padding: 8px 16px;
  }
}

.submit {
  margin-top: 8px;
  display: flex;
  justify-content: center;

  button {
    cursor: pointer;
    width: 176px;
    height: 32px;
    border-radius: 10px;
    background-color: #202c3e;
    color: #fff;
  }
}
</style>
