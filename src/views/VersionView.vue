<template>
  <main>
    <header>
      <h1>Alumni Economics Conference 2023</h1>
      <p>May 12-14, 2023 | Penn State University</p>
    </header>

    <hr />
    <section id="about">
      <p>
        The Alumni Economics Conference at PennState is a event that brings
        together faculty, alumni and students from Penn State to share their
        research, insights, and ideas.
      </p>
    </section>

    <hr />
    <section id="schedule">
      <h2>Conference Schedule</h2>
      <p>Coming Soon...</p>
    </section>
    <hr />
    <section id="submission">
      <h2>Paper Submission</h2>
      <p>Submit your research paper for the conference.</p>
    </section>
    <form id="pdf-form" @submit.prevent="sauvegarde">
      <div class="form-input">
        <label for="author">Author Name:</label>
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
        <label for="title">Paper Title:</label>
        <input type="text" id="title" name="title" v-model="form.title" />
      </div>

      <div class="form-input">
        <label for="abstract">Abstract:</label>
        <textarea
          id="abstract"
          name="abstract"
          v-model="form.abstract"
          required
        ></textarea>
      </div>

      <div class="form-input">
        <label for="pdf-input">Select (your paper)PDF file:</label>
        <input
          type="file"
          id="pdf-input"
          name="pdf"
          accept=".pdf, image/*, .doc, .docx, .txt"
          @change="onFileSelected"
        />
      </div>

      <div class="submit">
        <button type="submit">Submit</button>
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
