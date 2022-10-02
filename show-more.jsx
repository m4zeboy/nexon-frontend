 <main>
        <div className="container">
          <ul className="todos">
            {sliced.map((todo) => {
              return (
                <li className="todo" key={todo.id}>
                  {todo.title}
                </li>
              )
            })}
          </ul>
          <button onClick={showMore} className={
            max === todos.length ? 'hide-show-more': ''
          }>Show +</button>
        </div>
      </main>


      const [todos, setTodos] = useState([])

      useEffect(() => {
        api
          .get('/todos')
          .then((response) => setTodos(response.data))
          .catch((err) => {
            console.error('ops! ocorreu um erro' + err)
          })
      }, [])
      const [max, setMax] = useState(100)
      let sliced = todos.slice(0, max)
    
      function showMore() {
        setMax(max + 50)
      }
    