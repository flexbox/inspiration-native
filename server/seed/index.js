const { prisma } = require('../generated/prisma-client')
const contentfulExport = require('./contentful-export.json')

async function main() {
  for (let index = 0; index < contentfulExport.entries.length; index++) {
    const { title, author, twitter_name, slug } = contentfulExport.entries[
      index
    ].fields
    await prisma.createQuote({
      title: title ? title['en-US'] : '',
      author: author ? author['en-US'] : '',
      twitterName: twitter_name ? twitter_name['en-US'] : '',
      slug: slug ? slug['en-US'] : ''
    })
  }
}

main().catch((e) => console.error(e))
