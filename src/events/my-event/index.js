const queryString = require('querystring')
const arc = require('@architect/functions')
const data = require('@begin/data')
const table = 'interactions'
const key = 'clicks'

async function myEvent(event) {
  let raw = queryString.parse(
    new Buffer.from(event.body, 'base64').toString()
  )
  let prop = raw.name
  let count = await data.incr({
    table,
    key,
    prop
  })

  return
}

exports.handler = arc.events.subscribe(myEvent)
