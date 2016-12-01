var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  var data = {
    'siteTitle': 'StevenWaters.com - The homepage of Steven Waters, a web developer living in Tampa, Fl',
    'skills':
    {
      'skillsSet1': ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Responsive Design', 'Bootstrap 3', 'Wordpress', 'Node.js', 'Express.js', 'SASS', 'Git', 'NPM', 'Jade', 'Java', 'C++', 'C#', 'Visual Studio Code'],
      'skillsSet2': ['HTML4', 'CSS2', 'jQuery', 'JavaScript (ES5)', 'PHP5', 'ASP.net', 'T-SQL Scripting', 'Application Support', 'Documentation', 'Presentations', 'SDLC', 'SEO', 'Graphic Design', 'Illustrator', 'Photoshop'],
      'skillsSet3': ['ES6', 'React', 'Angular.js', 'Vue.js', 'Babel', 'Gulp', 'Web Pack', 'Web Assembly', 'CSS3 Animations', 'Filmmaking']
    },
    'codeItems': [
      {
        'title': 'Dateline Formatter',
        'description': 'Suspendisse commodo ac metus sed facilisis. In hac habitasse platea dictumst. Maecenas ullamcorper eget orci at dignissim. Praesent sit amet urna suscipit, aliquet erat eget, suscipit est. In libero quam, tempus dictum nisl eget, mattis sollicitudin ex. Vivamus mollis lobortis massa, nec vulputate nunc bibendum in. Donec non ligula convallis, pharetra leo eu, gravida urna. Nullam porta ipsum at orci commodo, eget ultricies turpis pretium.',
        'link': 'https://gist.github.com/swaters86/da10dad981a5f9911c58',
        'linkTitle': 'Code Repository Page for a script that can reformat datetime values in a database'
      },
      {
        'title': 'TinyPass Paywall Integration',
        'description': 'Suspendisse commodo ac metus sed facilisis. In hac habitasse platea dictumst. Maecenas ullamcorper eget orci at dignissim. Praesent sit amet urna suscipit, aliquet erat eget, suscipit est. In libero quam, tempus dictum nisl eget, mattis sollicitudin ex. Vivamus mollis lobortis massa, nec vulputate nunc bibendum in. Donec non ligula convallis, pharetra leo eu, gravida urna. Nullam porta ipsum at orci commodo, eget ultricies turpis pretium.',
        'link': 'https://github.com/swaters86/TinyPass-NCS-Integration',
        'linkTitle': 'Code Repository for a PHP Integration'
      },
      {
        'title': 'Replication Batch Script',
        'description': 'Suspendisse commodo ac metus sed facilisis. In hac habitasse platea dictumst. Maecenas ullamcorper eget orci at dignissim. Praesent sit amet urna suscipit, aliquet erat eget, suscipit est. In libero quam, tempus dictum nisl eget, mattis sollicitudin ex. Vivamus mollis lobortis massa, nec vulputate nunc bibendum in. Donec non ligula convallis, pharetra leo eu, gravida urna. Nullam porta ipsum at orci commodo, eget ultricies turpis pretium.',
        'link': 'https://gist.github.com/swaters86/b6c818af1587ac4b5628',
        'linkTitle': 'Code Repository Page for Batch Script'
      },
      {
        'title': 'Employee Record C++ Program',
        'description': 'Suspendisse commodo ac metus sed facilisis. In hac habitasse platea dictumst. Maecenas ullamcorper eget orci at dignissim. Praesent sit amet urna suscipit, aliquet erat eget, suscipit est. In libero quam, tempus dictum nisl eget, mattis sollicitudin ex. Vivamus mollis lobortis massa, nec vulputate nunc bibendum in. Donec non ligula convallis, pharetra leo eu, gravida urna. Nullam porta ipsum at orci commodo, eget ultricies turpis pretium.',
        'link': 'https://gist.github.com/swaters86/2f6b092f77cc95b59b0e',
        'linkTitle': 'Code Repository for a C++ program'
      },
      {
        'title': 'CCE Cleanup Stored Procedure',
        'description': 'Suspendisse commodo ac metus sed facilisis. In hac habitasse platea dictumst. Maecenas ullamcorper eget orci at dignissim. Praesent sit amet urna suscipit, aliquet erat eget, suscipit est. In libero quam, tempus dictum nisl eget, mattis sollicitudin ex. Vivamus mollis lobortis massa, nec vulputate nunc bibendum in. Donec non ligula convallis, pharetra leo eu, gravida urna. Nullam porta ipsum at orci commodo, eget ultricies turpis pretium. ',
        'link': 'https://gist.github.com/swaters86/fab20b8e64a2b6e52a86',
        'linkTitle': 'Code Respository Page for Stored Procedure'
      },
      {
        'title': 'Rock,Paper,Scissors Java App',
        'description': 'Suspendisse commodo ac metus sed facilisis. In hac habitasse platea dictumst. Maecenas ullamcorper eget orci at dignissim. Praesent sit amet urna suscipit, aliquet erat eget, suscipit est. In libero quam, tempus dictum nisl eget, mattis sollicitudin ex. Vivamus mollis lobortis massa, nec vulputate nunc bibendum in. Donec non ligula convallis, pharetra leo eu, gravida urna. Nullam porta ipsum at orci commodo, eget ultricies turpis pretium.',
        'link': 'https://gist.github.com/swaters86/210e0013f454b1c6ee48',
        'linkTitle': 'Code Repository for a Java program'
      },
      {
        'title': 'IncreName',
        'description': 'Suspendisse commodo ac metus sed facilisis. In hac habitasse platea dictumst. Maecenas ullamcorper eget orci at dignissim. Praesent sit amet urna suscipit, aliquet erat eget, suscipit est. In libero quam, tempus dictum nisl eget, mattis sollicitudin ex. Vivamus mollis lobortis massa, nec vulputate nunc bibendum in. Donec non ligula convallis, pharetra leo eu, gravida urna. Nullam porta ipsum at orci commodo, eget ultricies turpis pretium.',
        'link': 'https://github.com/swaters86/IncreName/tree/master/IncreName',
        'linkTitle': 'Code Repository for a C# program'
      }
    ],
    'portfolioItems': [
      {
        'imgSrc': '../../images/portfolio_images/NCS_Portal.png',
        'imgAlt': 'A screenshot NEWSCYCLE Digital Salesforce Portal',
        'captionTitle': 'NEWSCYCLE Digital Salesforce Portal',
        'url': 'http://swaters86.github.io/portfolio/NCSPortal/index.html',
        'captionText': 'Suspendisse commodo ac metus sed facilisis. In hac habitasse platea dictumst. Maecenas ullamcorper eget orci at dignissim. Praesent sit amet urna suscipit, aliquet erat eget, suscipit est. In libero quam, tempus dictum nisl eget, mattis sollicitudin ex. Vivamus mollis lobortis massa, nec vulputate nunc bibendum in. Donec non ligula convallis, pharetra leo eu, gravida urna. Nullam porta ipsum at orci commodo, eget ultricies turpis pretium.'
      },
      {
        'imgSrc': '../../images/portfolio_images/Inline_Style_Printer.png',
        'imgAlt': 'A screenshot of a Node.js app that prints out incline styles that have been applied to elements on a page',
        'url': 'http://inlinestyleprinter.azurewebsites.net/',
        'captionTitle': 'Inline Style Printer App',
        'captionText': 'Suspendisse commodo ac metus sed facilisis. In hac habitasse platea dictumst. Maecenas ullamcorper eget orci at dignissim. Praesent sit amet urna suscipit, aliquet erat eget, suscipit est. In libero quam, tempus dictum nisl eget, mattis sollicitudin ex. Vivamus mollis lobortis massa, nec vulputate nunc bibendum in. Donec non ligula convallis, pharetra leo eu, gravida urna. Nullam porta ipsum at orci commodo, eget ultricies turpis pretium.'

      },
      {
        'imgSrc': '../../images/portfolio_images/Bespoke%26Co.png',
        'imgAlt': 'A screenshot of Bespoke & Co"s website from about 4 years ago',
        'url': 'http://bespokeandcofl.azurewebsites.net/',
        'captionTitle': 'Bespoke & Co',
        'captionText': 'Suspendisse commodo ac metus sed facilisis. In hac habitasse platea dictumst. Maecenas ullamcorper eget orci at dignissim. Praesent sit amet urna suscipit, aliquet erat eget, suscipit est. In libero quam, tempus dictum nisl eget, mattis sollicitudin ex. Vivamus mollis lobortis massa, nec vulputate nunc bibendum in. Donec non ligula convallis, pharetra leo eu, gravida urna. Nullam porta ipsum at orci commodo, eget ultricies turpis pretium.'
      }, {
        'imgSrc': '../../images/portfolio_images/WoodlandWonders.png',
        'imgAlt': 'Screenshot of WoodlandWonders.org website - Woodland Wonders is non-profit organization for rehabilating injured and orphaned wildlife.',
        'url': 'http://woodlandwonders.org/',
        'captionTitle': 'Woodland Wonders',
        'captionText': 'Suspendisse commodo ac metus sed facilisis. In hac habitasse platea dictumst. Maecenas ullamcorper eget orci at dignissim. Praesent sit amet urna suscipit, aliquet erat eget, suscipit est. In libero quam, tempus dictum nisl eget, mattis sollicitudin ex. Vivamus mollis lobortis massa, nec vulputate nunc bibendum in. Donec non ligula convallis, pharetra leo eu, gravida urna. Nullam porta ipsum at orci commodo, eget ultricies turpis pretium.'
      }, {
        'imgSrc': '../../images/portfolio_images/AlphaTerra.png',
        'imgAlt': 'Screenshot of AlphaTerra"s former website',
        'url': 'http://alphaterra.azurewebsites.net/',
        'captionTitle': 'AlphaTerra',
        'captionText': 'Suspendisse commodo ac metus sed facilisis. In hac habitasse platea dictumst. Maecenas ullamcorper eget orci at dignissim. Praesent sit amet urna suscipit, aliquet erat eget, suscipit est. In libero quam, tempus dictum nisl eget, mattis sollicitudin ex. Vivamus mollis lobortis massa, nec vulputate nunc bibendum in. Donec non ligula convallis, pharetra leo eu, gravida urna. Nullam porta ipsum at orci commodo, eget ultricies turpis pretium.'
      }, {
        'imgSrc': '../../images/portfolio_images/DCS.png',
        'imgAlt': 'Screenshot of Diabetic Charitable Services former website',
        'url': 'http://diabeticservice.azurewebsites.net/',
        'captionTitle': 'Diabetic Charitable Services',
        'captionText': 'Suspendisse commodo ac metus sed facilisis. In hac habitasse platea dictumst. Maecenas ullamcorper eget orci at dignissim. Praesent sit amet urna suscipit, aliquet erat eget, suscipit est. In libero quam, tempus dictum nisl eget, mattis sollicitudin ex. Vivamus mollis lobortis massa, nec vulputate nunc bibendum in. Donec non ligula convallis, pharetra leo eu, gravida urna. Nullam porta ipsum at orci commodo, eget ultricies turpis pretium.'
      }
    ]

  }

  // Passing in data object into the JADE view the index page
  res.render('index', data)
})

module.exports = router
