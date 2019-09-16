const initialData = {
    root:{
        id: 0,
        content: "root",
        x: 0,
        y: 0,
        size: 20,
        radius: 100,
        attribution: 'root',
        child:[
            {
                id: 1,
                content: 'id:1',
                x:300,
                y:300,
                size: 20,
                radius: 100,
                attribution: 'what',
                child:[
                    {
                        id: 3,
                        content: 'id:3',
                        x: 600,
                        y: 300,
                        size: 20,
                        radius:100,
                        attribution:'what',
                        child:[]
                    },
                ]
            },
            {
                id: 2,
                content: 'id:2',
                x:-300,
                y: 300,
                size:20,
                radius:100,
                attribution:'when',
                child:[]
            }
        ]       
    }
}


export default initialData