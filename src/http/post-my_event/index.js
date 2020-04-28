const arc = require('@architect/functions')

exports.handler = async function http (req) {
  const name = 'my-event'
  const payload = { body: req.body }
  await arc.events.publish({ name, payload })
  return {
    statusCode: 302,
    headers: {
      location: '/'
    }
  }
}
