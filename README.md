# GitHarbor
GitHarboris a dynamic React application designed to streamline the process of discovering GitHub users and exploring their profiles. With GitHarbor, users can effortlessly search for GitHub users by typing relevant keywords, then provides a visually appealing display of the search results, showcasing user avatars and links to their GitHub profiles.
<hr>

How to run the project

Clone the repository to your local computer:

<b>git clone https://github.com/1511244120/GitHarbor.git</b>

Change to the project:

<b>cd GitHarbor</b>

Install the dependencies:

<b>npm install</b>

Start the project:

<b>npm start</b>

Then you can try the project out, happy coding!

<hr>
Some one notes about the design of the github search project:
network requests are send using AXIOS

in src_version1_githubserach folder, the React component communication is done by passing state with function props
in src folder, the React component communication is done PubSub React API, establish the Publish-Subscribe model

you can switch these 2 folders simply by changing the folder name that you would like to use to src and try them out, they both achieve the same functionality
