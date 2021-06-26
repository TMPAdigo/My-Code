const content = document.getElementById('content')
const date = document.getElementById('date')
const time = document.getElementById('time')
const addedBth = document.getElementById('addedBtn')
const deletedBth = document.getElementById('deletedBtn')
const list = document.getElementById('list')

const listContent = []

addedBtn.addEventListener('click', function () {

  listContent.unshift({
    content: content.value,
    date: date.value,
    time: time.value
  })

  // 渲染頁面的list
  let htmlstr = ''

  listContent.forEach(function (item) {
    htmlstr = htmlstr + `
      <div class="item">
        <div>
          <p>內容:${item.content}</p>
          <p>時間:${item.date}${item.time}</p>
        </div>
      </div>
    `
  })

  list.innerHTML = htmlstr
})

deletedBtn.addEventListener('click', function () {
  listContent.shift()

  let htmlstr = ''

  listContent.forEach(function (item) {
    htmlstr = htmlstr + `
      <div class="item">
        <div>
          <p>內容:${item.content}</p>
          <p>時間:${item.date}${item.time}4</p>
        </div>
      </div>
    `
  })

  list.innerHTML = htmlstr
})