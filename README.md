# GitHarbor
GitHarboris a dynamic React application designed to streamline the process of discovering GitHub users and exploring their profiles. With GitHarbor, users can effortlessly search for GitHub users by typing relevant keywords, then provides a visually appealing display of the search results, showcasing user avatars and links to their GitHub profiles.
<hr>

## How to run the project

**Clone the repository to your local computer:**
``` bash
$ git clone https://github.com/1511244120/GitHarbor.git
```
**Change to the project:**
``` bash
$ cd GitHarbor
```
**Install the dependencies:**
``` bash
$ npm install
```
**Start the project:**
``` bash
$ npm start
```
Then you can try the project out, happy coding!

<hr>
Some notes about the design of the GitHub search project:

- network requests are sent using AXIOS
- in src_version1_githubserach folder, the React component communication is done by passing state with function props
- in src folder, the React component communication is done PubSub React API, establish the Publish-Subscribe model

**You can switch these 2 folders simply by changing the folder name that you would like to use to src and try them out, they both achieve the same functionality**
