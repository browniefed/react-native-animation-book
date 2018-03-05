module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  lessonsDir: "lessons", // The name of the directory that contains lessons or docs.
  siteTitle: "React Native Animation Book", // Site title.
  siteTitleAlt: "React Native Animation Book", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://animationbook.codedaily.io", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A book about React Native Animations.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "codedailyio", // FB Application ID for using app insights
  googleAnalyticsID: "UA-92022203-1", // GA tracking ID.
  disqusShortname: "https-ericwindmill-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "browniefed", // Username to display in the author segment.
  userTwitter: "browniefed", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Portland, OR", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription: "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
  ],
  copyright: "", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  // TODO: Move this literally anywhere better.
  toCChapters: [
    "",
    "Introduction",
    "Resources",
    "Layout vs Animated",
    "Animated API",
    "Interpolation",
    "Handling Gestures / Events",
    "Basic Animations",
    "Advanced Animations",
  ], // Used to generate the Table Of Contents. Index 0 should be blank.
};
