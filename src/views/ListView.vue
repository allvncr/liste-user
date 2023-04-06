<template>
  <main>
    <header>
      <h1>Alumni Economics Conference 2023</h1>
      <p>May 12-14, 2023 | Penn State University</p>
    </header>

    <section id="schedule">
      <h2>Conference Schedule</h2>
      <p>List of Papers</p>

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
              <a :href="user.file" target="_blank" v-if="user.file">
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
    </section>
    <hr />

    <router-link to="/">Go to application form</router-link>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },

  computed: {
    ...mapGetters(['getListe']),
  },

  methods: {
    ...mapActions(['delete_user']),
    handleDelete(item) {
      this.delete_user(item)
    },
  },
}
</script>

<style lang="scss" scoped>
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
  background-color: #202c3e;
  color: #fff;
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

table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  color: #202c3e;
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

a {
  color: #202c3e;
}
</style>
