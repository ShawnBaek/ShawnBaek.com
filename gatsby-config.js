let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development"
console.log(`Using environment config: '${activeEnv}'`)

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
      title: 'Gatsby Default Starter',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: 'ShawnBaek',
          short_name: 'starter',
          start_url: '/',
          background_color: '#663399',
          theme_color: '#663399',
          display: 'minimal-ui',
          icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
        },
      },
      'gatsby-plugin-offline',
      {
        resolve: `gatsby-source-wordpress`,
        options: {
          /*
          * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
          * Example : 'gatsbyjswpexample.wordpress.com' or 'www.example-site.com'
          */
  
          baseUrl: `uxengineer.wordpress.com`,
          // The protocol. This can be http or https.
          protocol: `https`,
          // Indicates whether the site is hosted on wordpress.com.
          // If false, then the asumption is made that the site is self hosted.
          // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
          // If your site is hosted on wordpress.org, then set this to false.
          hostingWPCOM: true,
          // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
          // This feature is untested for sites hosted on Wordpress.com
          useACF: false,
          
          // Include specific ACF Option Pages that have a set post ID
          // Regardless if an ID is set, the default options route will still be retrieved
          // Must be using V3 of ACF to REST to include these routes
          // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
          // routes with the ID option_page_1 and option_page_2
          // Dashes in IDs will be converted to underscores for use in GraphQL
          acfOptionPageIds: [],
          auth: {
            // If auth.user and auth.pass are filled, then the source plugin will be allowed
            // to access endpoints that are protected with .htaccess.
            htaccess_user: "your-htaccess-username",
            htaccess_pass: "your-htaccess-password",
            htaccess_sendImmediately: false,
  
            // If hostingWPCOM is true then you will need to communicate with wordpress.com API
            // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
            // then add your clientId, clientSecret, username, and password here
            wpcom_app_clientSecret: process.env.WORDPRESS_API_KEY,
            wpcom_app_clientId: process.env.WORDPRESS_CLIENT_ID,
            wpcom_user: process.env.WORDPRESS_USER,
            wpcom_pass: process.env.WORDPRESS_PASSWORD,
          },
          // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
          // It can help you debug specific API Endpoints problems.
          verboseOutput: false,
          // Set how many pages are retrieved per API request.
          perPage: 100,
          // Search and Replace Urls across WordPress content.
          searchAndReplaceContentUrls: {
            sourceUrl: "https://uxengineer.wordpress.com",
            replacementUrl: "https://uxengineer.wordpress.com",
          },
          // Set how many simultaneous requests are sent at once.
          concurrentRequests: 10,
          // Exclude specific routes using glob parameters
          // See: https://github.com/isaacs/minimatch
          // Example:  `["/*/*/comments", "/yoast/**"]` will exclude routes ending in `comments` and
          // all routes that begin with `yoast` from fetch.
          includedRoutes: [
            "**/categories",
            "**/posts",
            "**/pages",
            "**/media",
            "**/tags",
            "**/taxonomies",
            "**/users",
          ],
          excludedRoutes: ["/*/*/comments", "/yoast/**"],
          // use a custom normalizer which is applied after the built-in ones.
          normalizer: function({ entities }) {
            return entities
          },
        },
      },
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                // Class prefix for <pre> tags containing syntax highlighting;
                // defaults to 'language-' (eg <pre class="language-js">).
                // If your site loads Prism into the browser at runtime,
                // (eg for use with libraries like react-live),
                // you may use this to prevent Prism from re-processing syntax.
                // This is an uncommon use-case though;
                // If you're unsure, it's best to use the default value.
                classPrefix: "language-",
                // This is used to allow setting a language for inline code
                // (i.e. single backticks) by creating a separator.
                // This separator is a string and will do no white-space
                // stripping.
                // A suggested value for English speakers is the non-ascii
                // character '›'.
                inlineCodeMarker: null,
                // This lets you set up language aliases.  For example,
                // setting this to '{ sh: "bash" }' will let you use
                // the language "sh" which will highlight using the
                // bash highlighter.
                aliases: {},
                // This toggles the display of line numbers alongside the code.
                // To use it, add the following line in src/layouts/index.js
                // right after importing the prism color scheme:
                //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
                // Defaults to false.
                showLineNumbers: true,
                // If setting this to true, the parser won't handle and highlight inline
                // code used in markdown i.e. single backtick code like `this`.
                noInlineHighlight: false,
              },
            },
            ],
          },
      },
      "gatsby-transformer-sharp",
      "gatsby-plugin-sharp",
      `gatsby-plugin-sass`,
      {
        resolve: 'gatsby-plugin-react-svg',
        options: {
          rule: {
            include: /assets/
          }
        }
       },
    ],
  }
  