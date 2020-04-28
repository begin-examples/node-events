module.exports = function Home({ clicks }) {
  try {
    clicks = JSON.stringify(clicks)
  } catch(err) {
    console.error(err)
  }
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Begin Event Functions Example</title>
</head>
<style>
 :root {
    --light: #FEFEFE;
    --mid: #DCDCDC;
    --mid-dark: #DDD;
    --dark: #666;
    --blue: #007ACC;
    --purple: #9C24FF;
    --angle: 45deg;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family:
      ui-sans-serif,
      system-ui,
      -system-ui,
      -apple-system,
      BlinkMacSystemFont,
      Roboto, Helvetica, Arial,
      sans-serif,
      "Apple Color Emoji";
  }
  .display-flex {
    display: flex;
  }
  .text-decoration-none {
    text-decoration: none;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .border-none {
    border: none;
  }
</style>
<body>
  <h1>Publish an event</h1>
  <div class="display-flex">
    <form
      action=/my-event
      method=POST
    >
      <input type="hidden" name="name" value="one">
      <button
        class="
          text-decoration-none
          border-radius-1
          border-none
          cursor-pointer
        "
      >
        One
      </button>
    </form>
    <form
      action=/my-event
      method=POST
    >
      <input type="hidden" name="name" value="two">
      <button
        class="
          text-decoration-none
          border-radius-1
          border-none
          cursor-pointer
        "
      >
        Two
      </button>
    </form>
    <form
      action=/my-event
      method=POST
    >
      <input type="hidden" name="name" value="three">
      <button
        class="
          text-decoration-none
          border-radius-1
          border-none
          cursor-pointer
        "
      >
        Three
      </button>
    </form>
  </div>
  <ul id="js-results">
    ${clicks}
  </ul>
  <script>
    (function(){
        let display = document.getElementById('js-results')
        setInterval(update, 5000)
        async function update() {
          try {
            let results = await (await fetch('/interactions')).json()
            console.log('RESULTS: ', results)
            if (display) {
              let labels = Object.keys(results)
              let items = hlabels.map(label => Item({
                label,
                value: results[label]
              }).join('')
              display.innerHTML = items
            }
          } catch(err) {
            console.error(err)
          }
        }

      function Item({ label, value }) {
        return `
          <li>
            <b>${label}</b>: ${value}
          </li>
        `
      }
    }())
  </script>
</body>
</html>
  `
}
