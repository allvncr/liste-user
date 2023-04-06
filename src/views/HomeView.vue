<template>
  <main v-if="!showList">
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

      <p>List of Papers</p>

      <ul></ul>
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

      <br />
      <button type="submit">Submit</button>
    </form>
    <a @click="change">Voir la Liste</a>
  </main>
  <main v-else>
    <table class="table">
      <thead>
        <tr>
          <th>Author</th>
          <th>Title</th>
          <th>Abstract</th>
          <th>Download</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in getListe" :key="i">
          <td>{{ user.author }}</td>
          <td>{{ user.title }}</td>
          <td>{{ user.abstract }}</td>
          <td>
            <a :href="user.file" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"
                  fill="#000"
                ></path>
              </svg>
            </a>
          </td>
          <td>
            <a @click="handleDelete(user)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"
                  fill="#000"
                ></path>
              </svg>
            </a>
          </td>
        </tr>
      </tbody>
    </table>

    <a @click="change">Voir le formulaire</a>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      showList: false,
      form: {
        author: null,
        title: null,
        abstract: null,
        file: null,
      },
    }
  },

  computed: {
    ...mapGetters(['getListe']),
  },

  methods: {
    ...mapActions(['store_user', 'delete_user']),
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
    handleDelete(item) {
      this.delete_user(item)
    },
    change() {
      this.showList = !this.showList
      this.$forceUpdate()
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

button {
  padding: 6px 12px;
}

a {
  color: #202c3e;
  font-size: 18px;
  cursor: pointer;
  text-decoration: underline;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}
</style>
