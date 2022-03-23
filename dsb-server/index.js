const PORT = process.env.PORT || 4000

const io = require('socket.io')(PORT, {
    cors: {
        origin: '*'
    }
});

let positions = []

function findObjAndUpdatePosition(info, id){
    let date_ob = new Date()
    let time = date_ob.toLocaleString('en-GB',  { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute:'2-digit', second:'2-digit'})

    // verifica se o objeto existe, se existir entao atualiza a posicao, caso contrario cria um novo objeto
    let obj = positions.find(obj => obj.name === info.name)
    if(obj){
        obj.position = info.position
        obj.speed = (info.speed)*1.94384
        obj.time = time,
        obj.id = id
    }
    else{
        positions.push(info)
    }
}

io.on("connection", socket => {
    console.log("USUARIO: " + socket.id);

    socket.emit("positions", positions)

    socket.on("newPosition", (info) => {
        findObjAndUpdatePosition(info, socket.id)
        io.emit("positions", positions)
    })

    socket.on("disconnect", () => {
        console.log("USUARIO DESCONECTADO: " + socket.id);
        // remove the object from the array
        positions = positions.filter(obj => obj.id !== socket.id)
        io.emit("positions", positions)
    })

})

