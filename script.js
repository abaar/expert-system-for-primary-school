Vue.component('v-select', VueSelect.VueSelect)
var app = new Vue({
        el: '#app-container',
        data: {
            page : 1,
            jawabanfile:false,
            soalsfile:false,
            ovs_option:false,
            usefiledisabled:true,
            materis:[
                ["Bilangan 0",75],
                ["Bilangan Bulat Positif",75],
                ["Penjumlahan Bilangan",75],
                ["Bilangan Ganjil",75],
                ["Bilangan Genap",75],
                ["Pengurangan Bilangan",75],
                ["Perkalian Bilangan",75],
                ["Bilangan Bulat Negatif",75],
                ["Pembagian Bilangan Bulat",75],
                ["Bilangan Prima",75],
                ["Bilangan Pecahan",75]],
            soals:[
                ["1","SA1","8 + 5 + 4 =",[0,0,5,0,0,0,0,0,0,0,0]],
                ["1","SA2","6 - 3 =",[0,0,0,0,0,5,0,0,0,0,0]],
                ["1","SA3","7 + 2 + 6 =",[0,0,5,0,0,0,0,0,0,0,0]],
                ["1","SA4","9 - 5 = ",[0,0,0,0,0,5,0,0,0,0,0]],
                ["1","SA5","8 + 1 + 2 + 5 =",[0,0,5,0,0,0,0,0,0,0,0]],
                ["1","SB1","Lambang bilangan 5",[0,5,0,0,0,0,0,0,0,0,0]],
                ["1","SB2","Lambang bilangan 14",[0,5,0,0,0,0,0,0,0,0,0]],
                ["1","SB3","Lambang bilangan 7",[0,5,0,0,0,0,0,0,0,0,0]],
                ["1","SB4","Lambang bilangan 'Delapas belas'",[0,5,0,0,0,0,0,0,0,0,0]],
                ["1","SB5","Lambang bilangan 'tujuh'",[0,5,0,0,0,0,0,0,0,0,0]],

                ["2","SA6","4 x 7 = ... + ... + ... + ... = ",[0,0,4,0,0,0,5,0,0,0,0]],
                ["2","SA7","4 x 2 x 4 = ... x ... =",[0,0,0,0,0,0,5,0,0,0,0]],
                ["2","SA8","0 = 65 x ...",[0,0,0,0,0,0,5,0,0,0,0]],
                ["2","SA9","Paman mempunyai 5 kantong plastik berisi kue donat. Masing-masing kantongterdiri dari 20 donat. Ada berapa banyak jumlah keseluruhan donat",[0,0,4,0,0,0,5,0,0,0,0]],
                ["2","SA10","9 x 9 = ",[0,0,0,0,0,0,5,0,0,0,0]],
                ["2","SB6","6 x 10 - 72 : 8 =",[0,0,0,0,0,5,5,0,5,0,0]],
                ["2","SB7","( 3 + 5 ) x 7 : ( 4 - 2 ) = ",[0,0,5,0,0,5,5,0,5,0,0]],
                ["2","SB8","80 : 10 x 7 = ... x ... = ",[0,0,0,0,0,0,5,0,5,0,0]],
                ["2","SB9","5 + 4 - ( 2 x 4 ) + 8 = ...",[0,0,5,0,0,5,5,0,0,0,0]],
                ["2","SB10","10 : 5 + ( 7 + 3 ) x 2 = ...",[0,0,5,0,0,0,5,0,5,0,0]],

                ["3","SA11","",[0,0,0,0,0,5,0,0,5,0,0]],
                ["3","SA12","",[0,0,5,0,0,0,0,0,0,0,0]],
                ["3","SA13","",[0,0,0,0,0,5,0,0,0,0,0]],
                ["3","SA14","",[0,0,5,0,0,0,0,0,0,0,0]],
                ["3","SA15","",[0,0,0,0,0,5,0,0,0,0,0]],
                ["3","SB11","",[0,0,0,0,0,4,0,0,5,0,0]],
                ["3","SB12","",[0,0,0,0,0,0,0,0,5,0,0]],
                ["3","SB13","",[0,0,0,0,0,0,5,0,0,0,0]],
                ["3","SB14","",[0,0,0,0,0,0,0,0,5,0,0]],
                ["3","SB15","",[0,0,0,0,0,0,5,0,0,0,0]],

                ["4","SA16","",[0,0,5,0,0,0,0,0,0,0,5]],
                ["4","SA17","",[0,0,5,0,0,0,0,0,0,0,5]],
                ["4","SA18","",[0,0,5,0,0,0,0,0,0,0,5]],
                ["4","SA19","",[0,0,5,0,0,0,0,0,0,0,5]],
                ["4","SA20","",[0,0,5,0,0,0,0,0,0,0,5]],
                ["4","SB16","",[0,0,5,0,0,4,5,5,0,0,0]],
                ["4","SB17","",[0,0,5,0,0,4,5,5,0,0,0]],
                ["4","SB18","",[0,0,0,0,0,5,5,5,0,0,0]],
                ["4","SB19","",[0,0,5,0,0,4,0,5,5,0,0]],
                ["4","SB20","",[0,0,5,0,0,5,5,0,5,0,0]],

                ["5","SA21","",[0,0,5,0,0,5,0,0,0,0,5]],
                ["5","SA22","",[0,0,0,0,0,0,0,0,5,0,5]],
                ["5","SA23","",[0,0,5,0,0,5,0,0,0,0,5]],
                ["5","SA24","",[0,0,0,0,0,0,5,0,0,0,5]],
                ["5","SA25","",[0,0,0,0,0,0,0,0,5,0,5]],
                ["5","SB21","",[0,0,0,0,0,0,5,0,5,0,5]],
                ["5","SB22","",[0,0,0,0,0,0,5,0,5,0,5]],
                ["5","SB23","",[0,0,0,0,0,0,5,0,5,0,5]],
                ["5","SB24","",[0,0,0,0,0,0,5,0,5,0,5]],
                ["5","SB25","",[0,0,5,0,0,5,5,0,5,0,5]],

                ["6","SA26","",[0,0,0,0,0,0,4,0,5,5,0]],
                ["6","SA27","",[0,0,0,0,0,0,4,0,5,5,0]],
                ["6","SA28","",[0,0,0,0,0,0,4,0,5,5,0]],
                ["6","SA29","",[0,0,0,0,0,0,4,0,5,5,0]],
                ["6","SA30","",[0,0,0,0,0,0,4,0,5,5,0]],
                ["6","SB26","",[0,0,5,0,0,0,4,0,5,0,0]],
                ["6","SB27","",[0,0,5,0,0,0,4,0,5,0,0]],
                ["6","SB28","",[0,0,5,0,0,0,4,0,5,0,0]],
                ["6","SB29","",[0,0,5,0,0,0,0,0,0,0,0]],
                ["6","SB30","",[0,0,5,0,0,0,0,0,0,0,0]],
                
                ],
            relation:[],
            node : [
                {id:0,label:"Bilangan 0",x:-225, y:-100},
                {id:1,label:"Bilangan Bulat Positif",x:0, y:-200},
                {id:2,label:"Penjumlahan Bilangan",x:-75, y:-100},
                {id:3,label:"Bilangan Ganjil",x:100, y:-100},
                {id:4,label:"Bilangan Genap",x:275, y:-100},
                {id:5,label:"Pengurangan Bilangan",x:-175, y:0},
                {id:6,label:"Perkalian Bilangan",x:-25, y:0},
                {id:7,label:"Bilangan Bulat Negatif",x:-225, y:100},
                {id:8,label:"Pembagian Bilangan Bulat",x:-15, y:100},
                {id:9,label:"Bilangan Prima",x:-175, y:200},
                {id:10,label:"Bilangan Pecahan",x:-25, y:200},
            ],
            criticalnode:[],
            abilitynode:[],
            edge:[],
            siswa:[
                ["3","1","","","Andreas Alantius Taslulu","111111111111101110000011000000"],
                ["3","2","","","Arnetta Arya Tjwa","111111111111111110111011010000"],
                ["3","3","","","Brigitta Rayi Ayu Triyanti","110110111110101001000101001100"],
                ["3","4","","","Chelsea Terry Karyadinata","111111111110101000100111001010"],
                ["3","5","","","Cyrilus Abnertya Hartono","111110000011111000001111100000"],
                ["3","6","","","Della Vianata","111111111111101010010111100101"],
                ["3","7","","","Jesselyn Suwignyo","111111111101101000100111110100"],
                ["3","8","","","Joachim Stefanson","111111111101101100010011100000"],
                ["3","9","","","Joyce Caroline","111111111110101001000000000010"],
                ["3","10","","","Kimiko Fradella Walalangi","111111111100101110000111110100"],
                ["3","11","","","Natalia Noviani Sidharta","111111111111001000000111000100"],
                ["3","12","","","Regina Gabriella","111101111111111111100111111000"],
                ["3","13","","","Samantha Amy Lee Tandjung","111111111101001001000101000101"],
                ["3","14","","","Shanessa Leung","111101111111111101100111110111"],
                ["3","15","","","Tiffany Gabriella Kristiano","111111111111111011111101000101"],
                ["3","16","","","Valent Kurnia Rahadjo","111111111110100101100101000110"],
                ["3","17","","","Vania Elaine Tjandra","111111111111101111100111110010"],
                ["3","18","","","William Sugiharto Margowi","101111110011101111111101000111"],
                ["3","19","","","Yohana Afrilia Olin","111111111101001001000111011000"],
                ["3","20","","","Maelakhenia Sachineera Zen","111111111111111001100101011100"],
                ["3","21","","","Kenzo Keenan Khosuma","111111111111101001000111001100"],
                ["3","22","","","Frederique Dwight Vaughn","111011111110111100100100000010"],
                ["3","23","","","Calvin","111111111111110000110000010100"],
                ["4","24","","","Alicia Angeline Seryadi","1111111111010111011001010001000000001000"],
                ["4","25","","","Benediktus Matthew Nicholas","1111111111011110001100001011000000001010"],
                ["4","26","","","Calysta Audrey Ongkoseputro","1111111111011111111011111001010000001000"],
                ["4","27","","","Cherish Wilona","1111111111111110011101011010010101000010"],
                ["4","28","","","Erensano Gunawan","1111111111111111011001110011110001000000"],
                ["4","29","","","Florencia Irene Lugianto","1111111111100010000001110000011000000000"],
                ["4","30","","","Gabriel Christhoper Kwee Jaya","1111111111111111111001111111110000011101"],
                ["4","31","","","Gabriel Nalom Lumbantoruan","1111111111111111011011111111111000001001"],
                ["4","32","","","Ghea Ignacia","1111111111111111001001011010011000000000"],
                ["4","33","","","Jason Julius Tjandra","1111111111001010011010000000010000001000"],
                ["4","34","","","Jennifer Maralonia","1111111111010110100010000001001000100000"],
                ["4","35","","","Jessica Trevina Gunawan","1111111111111111111001111111011001000000"],
                ["4","36","","","Kayla Sananta","1111111111111111111001111111110000000010"],
                ["4","37","","","Larasati Ayu Pertiwi","1111111111010010101111100001010010011000"],
                ["4","38","","","Matthew Evangelo Poentoadji","1111111111101110111011010111101000001000"],
                ["4","39","","","Nathanael Olivier Ong","1111111111101110100001110000000000000100"],
                ["4","40","","","Nicholas Alviano Paramatirta","1111111111110111000111110000000000000000"],
                ["4","41","","","Rayhan Pawitra Nagatama","1111111111111111111001111111111100011110"],
                ["4","42","","","Stanislaus Andrew Louis L.","1111111111010010010011000000000000000001"],
                ["4","43","","","Tizar Sahala Hawkson Sianipar","1111011111010010111001000000001000110000"],
                ["4","44","","","Shanice Clarine Sussanto","1111111111100110100001000001000010100001"],
                ["4","45","","","Braveheart Nikho Jefferson","1111111111101111011101110000000010100110"],
                ["4","46","","","Marvel Jericho Hermawan","1111011111001010000001001001001110000000"],
                ["4","47","","","Victoria","1111111111111000111001010011000010000101"],
                ["5","48","","","Billy Fidelito Hartono","11111111110111111110011111111100010111000010111110"],
                ["5","49","","","Edmundo Kitaro ","11111111111111110010111111111111100111101001100010"],
                ["5","50","","","Hebert Karsten Juwono","11110111111111111110111111110111001111011001111100"],
                ["5","51","","","Nevilleson Anneldeano Teguh","11111111110111111110111111111111011111111001111110"],
                ["5","52","","","Ryo Hartono Margowidjojo","11111111110011101111011101010011001010000000000100"],
                ["5","53","","","Satrio Endi Nugroho","11111111111000100100010000000110010000001000110000"],
                ["5","54","","","Valentino Vincent Cussoy","11011111111111110110110001100110000010111000000000"],
                ["5","55","","","Aghata Aurelia Putri Sulendra","11111111111111110110101010110110101000000101110000"],
                ["5","56","","","Callita Cecilia Soeharno","11111111111111111110011111111111101010001101001110"],
                ["5","57","","","Callita Cecilia Soeharno","11111111111111111110011111111111101010001101001110"],
                ["5","58","","","Celline Natania Go","11111111110011100110111111110111001001001001100000"],
                ["5","59","","","Michelle Freya G.J.","11111111110110100010110111111111001111100000000000"],
                ["5","60","","","Princessa Alexandra","11111111111011101111011100010010001010000000000110"],
                ["5","61","","","Reginna Sasha Kosasih","11111111111111101000001110000000100000000101000000"],
                ["5","62","","","Vivian Liemantoro","11111111110110111100011111000011100010000100100011"],
                ["5","63","","","Jordan Rumuy","11111111110111101100011110000011001000000001110100"],
                ["5","64","","","Rafael Nicolas Setiawan","11111111110000111000011010010110100110101001100000"],
                ["5","65","","","Naquita Angelica Vaughn","11011111111111110110011101111111000011000110111111"],
                ["6","66","","","Cliff Constantine Oentoeng","111111111101111111101101001110000001100000000000000000000000"],
                ["6","67","","","David Alexander L","111111111101111111111111111111111101111111001101101011110000"],
                ["6","68","","","Eugene Emmanuel Oe","101111111111111011100100010111101010110011010001000000001000"],
                ["6","69","","","Han Christian Gunawan","111111111111111001110110111111001111111101110111111011110000"],
                ["6","70","","","Jason Alexandro Demili","111111111111111011100111111111001101111111111100001011100100"],
                ["6","71","","","Jason Terry Karyadinata","111111111111111110111111111111110101111111001111101011000000"],
                ["6","72","","","Jonathan Wijaya","111111111111111111100111011101000101111000000101100010111000"],
                ["6","73","","","Kevin Phillips","111111111111111111110111011111000101111100110000111010100100"],
                ["6","74","","","Anastasia Evelyn","111111111111111111101111011111001101111101100001001011000000"],
                ["6","75","","","Angelique Novelyn","111111111110101101100101110111001001110100111111101001000001"],
                ["6","76","","","Angely Nathania Go","111111111111111111101111111111000001111001011110101011010000"],
                ["6","77","","","Antoinetta Bertricia","111111111101001001000101010111101010010000000000001000001100"],
                ["6","78","","","Gabriella Wenny Gracia","111111111111111111101111101101000101111101010001000010000000"],
                ["6","79","","","Chelsea Livikho Jefferson","111111111111111101100111111111000011111100000000001001100100"],
                ["6","80","","","Jenica Agung Mulia","111111111111101111110111011111001001110101110000011011011000"],
                ["6","81","","","Gavriel Xaverianus","111111111111110010000001011010101000100000100000000010011100"],
                ["6","82","","","Jessica Agung Mulia","111111111111111111110111111111111101110100110001101011100000"],
                ["6","83","","","Jason Christopher Wijaya","111111111111111001010111100000000001010000000010000000100000"],
                ["6","84","","","Jocelyn Tedjokusuma","111111111111111111101111111111101100111100110111100101110000"],
                ["6","85","","","Clara Jotica Subhaga","111111111101111011100111000101000001010000000000001100011000"],
                ["6","86","","","Lolana Victoria Frans","111111111101011111100101001101000000100011010010010000101000"],
                ["6","87","","","Juan Asher Reiko","111111111111111111111111111111110101111111011111111011111010"],
                ["6","88","","","Franciska Tarma Niastuti","111111111111111111101111101111111100111011001000000010101000"],
                ["6","89","","","Rr Alyshia Indira Nugraha","111111111111111111010111101101000001111001110010001011011100"],
            ],
            kelas:[],
            option:[
            ],
            chosen_result:"",
            sorted_siswa:[],
            downloadable_data:null,
            uploaded_data:null,
        },
        components:{
            'ovs-network':{
                template: "#mytmp",
                data() {
                    return {
                        nodes: this.$root.node,
                        edges: this.$root.edge,
                        options: {
                            locales:{
                                en:{
                                    edit: 'Ubah',
                                    del: 'Hapus',
                                    back: 'Kembali',
                                    addNode: 'Add Node',
                                    addEdge: 'Tambah Relasi',
                                    editNode: 'Edit Node',
                                    editEdge: 'Ubah Relasi',
                                    addDescription: 'Click in an empty space to place a new node.',
                                    edgeDescription: 'Klik pada sebuah node dan tarik ke node yang ingin dihubungkan!',
                                    editEdgeDescription: 'Click on the control points and drag them to a node to connect to it.',
                                    createEdgeError: 'Cannot link edges to a cluster.',
                                    deleteClusterError: 'Clusters cannot be deleted.',
                                    editClusterError: 'Clusters cannot be edited.'
                                }
                            },
                            manipulation: {
                                enabled: true,
                                initiallyActive: true,
                                addEdge: function(edgeData, callback) {
                                    callback(edgeData);
                                },
                                addNode:false,
                                deleteNode: false,
                                addEdge:(this.$root.page==5)?false:true,
                                deleteEdge:(this.$root.page==5)?false:true,
                            },
                            nodes: {
                                shape:"box",
                                physics: false,
                            },
                            interaction:{
                                zoomView:false,
                            },
                            edges:{
                                arrows: {
                                    to: { enabled: true, scaleFactor: 1, type: "arrow" }
                                }
                            }
                        },
                        container: '',
                        network:null,
                    }
                },
                watch:{
                    nodes:function(){
                        this.network = new vis.Network(this.container, this.graph_data, this.options);
                    }
                },
                computed: {
                    graph_data() {
                        return {
                            nodes: this.$root.node,
                            edges: this.$root.edge
                        }
                    }
                },
                methods:{
                    reset:function(){
                        this.network = new vis.Network(this.container, this.graph_data, this.options);
                    }
                },
                mounted() {
                    this.container = document.getElementById('mynetwork');
                    this.network = new vis.Network(this.container, this.graph_data, this.options);
                }
            },
            'ovs-topikkritis':{
                template: "#mycritical",
                data() {
                    return {
                        nodes: this.$root.criticalnode,
                        edges: this.$root.edge,
                        options: {
                            manipulation: {
                                enabled: true,
                                initiallyActive: true,
                                addEdge: function(edgeData, callback) {
                                    callback(edgeData);
                                },
                                addNode:false,
                                deleteNode: false,
                                addEdge:(this.$root.page==5)?false:true,
                                deleteEdge:(this.$root.page==5)?false:true,
                            },
                            nodes: {
                                shape:"box",
                                physics: false,
                            },
                            interaction:{
                                zoomView:false,
                            },
                            edges:{
                                arrows: {
                                    to: { enabled: true, scaleFactor: 1, type: "arrow" }
                                }
                            }
                        },
                        container: '',
                        network:null,
                    }
                },
                watch:{
                    nodes:function(){
                        this.network = new vis.Network(this.container, this.graph_data, this.options);
                    }
                },
                computed: {
                    graph_data() {
                        return {
                            nodes: this.nodes,
                            edges: this.edges
                        }
                    }
                },

                mounted() {
                    this.container = document.getElementById('mycriticalnetwork');
                    this.network = new vis.Network(this.container, this.graph_data, this.options);
                }
            },
            'ovs-kompetensi':{
                template: "#myability",
                data() {
                    return {
                        nodes: this.$root.abilitynode,
                        edges: this.$root.edge,
                        options: {
                            manipulation: {
                                enabled: true,
                                initiallyActive: true,
                                addEdge: function(edgeData, callback) {
                                    callback(edgeData);
                                },
                                addNode:false,
                                deleteNode: false,
                                addEdge:(this.$root.page==5)?false:true,
                                deleteEdge:(this.$root.page==5)?false:true,
                            },
                            nodes: {
                                shape:"box",
                                physics: false,
                            },
                            interaction:{
                                zoomView:false,
                            },
                            edges:{
                                arrows: {
                                    to: { enabled: true, scaleFactor: 1, type: "arrow" }
                                }
                            }
                        },
                        container: '',
                        network:null,
                    }
                },
                watch:{
                    nodes:function(){
                        this.network = new vis.Network(this.container, this.graph_data, this.options);
                    }
                },
                computed: {
                    graph_data() {
                        return {
                            nodes: this.nodes,
                            edges: this.edges
                        }
                    }
                },

                mounted() {
                    this.container = document.getElementById('myabilitynetwork');
                    this.network = new vis.Network(this.container, this.graph_data, this.options);
                }
            },
        },
        created:function(){
            this.criticalnode = Array.from(this.node);
            this.abilitynode = Array.from(this.node);
            this.resetOption();
        },
        methods:{
            getRelationAndNextPage:function(){
                
                for(var i=0 ; i < this.node.length ; ++i){
                    this.relation.push([]);
                    for(var j = 0 ; j < this.node.length ; ++j){
                        this.relation[i].push(0);
                    }
                }

                for(var i=0 ; i< this.node.length ; ++i){
                    tobesearched = this.node[i]['id'].toString();
                    connectedEdgesOfSearched = this.$refs.petakonsep_graph.network.getConnectedEdges(tobesearched);
                    for(var j= 0 ; j < connectedEdgesOfSearched.length ; ++j){
                        connectingEdges = this.$refs.petakonsep_graph.network.getConnectedNodes(connectedEdgesOfSearched[j]);
                        this.relation[connectingEdges[1]][connectingEdges[0]]=1;
                    }
                }

                this.page=3;
            },
            movetopage:function(page){
                this.page = page;
            },
            addMateri:function(){
                visheight = ($("#mynetwork").children().first().children().first().height() - 20)/2;
                viswidth = ($("#mynetwork").children().first().children().first().width() - 20)/2;
                visx = Math.floor(Math.random() * viswidth) + 1;
                isXnegatif = Math.random() < 0.5 ? -1 : 1;
                visx = visx * isXnegatif;

                visy = Math.floor(Math.random() * visheight) + 1;
                isYnegatif = Math.random() < 0.5 ? -1 : 1;
                visY = visy * isYnegatif;

                this.materis.push(["",""]);
                
                for (var i =0 ; i < this.soals.length ; ++i){
                    this.soals[i][3].push(0);
                }
            },
            delMateri:function(index){
                this.materis.splice(index,1);
                for (var i =0 ; i < this.soals.length ; ++i){
                    this.soals[i][3].splice(index,1);
                }
            },
            addQuestion:function(){
                forbobot = [];
                for(var i = 0 ; i < this.materis.length ; ++i){
                    forbobot.push(0);
                }
                this.soals.push(["","","",forbobot]);
            },
            delQuestion:function(index){
                this.soals.splice(index,1);
            },
            addSiswa:function(){
                this.siswa.push(["","","","","",""]);
            },
            delSiswa:function(index){
                this.siswa.splice(index,1);
            },
            getCorrectError:function(string,kelasnya){
                tt = [];
                tt_count = 0;
                ee = [];
                ee_count = 0;
                for (var i =0 ; i < this.materis.length ; ++i ){
                    tt.push(0);
                    ee.push(0);
                }
                for(var i =0 ; i < string.length ; ++i){
                    if(i>= this.soals.length){
                        break;
                    }
                    if(parseInt(this.soals[i][0])<=parseInt(kelasnya)){
                        if(string.charAt(i)=='1'){
                            tt_count++;
                            for(var j = 0 ; j < this.materis.length ; ++j){
                                tt[j]=tt[j]+this.soals[i][3][j];
                            }
                        }else{
                            ee_count++;
                            for(var j = 0 ; j < this.materis.length ; ++j){
                                ee[j]=ee[j]+this.soals[i][3][j];
                            }
                        }
                    }
                }
                console.log("aw snap!");
                return { 'error':ee, 'correct':tt , 'error_count':ee_count , 'correct_count':tt_count };
            },
            calculateMedian:function median(values){
                if(values.length ===0) return 0;

                x = [];
                for(var i =0; i<values.length; ++i){
                    x.push(values[i]['ratio']);
                }

                values=x;

                values.sort(function(a,b){
                    return a-b;
                });

                var half = Math.floor(values.length / 2);

                if (values.length % 2)
                    return values[half];

                return (values[half - 1] + values[half]) / 2.0;
            },
            getErrorAverage(kelas){
                tt = [] ;
                for(k =0 ; k <this.materis.length; k++){
                    tt.push(0.0);
                }

                for (var i =0 ; this.sorted_siswa.length ; ++i){
                    if(this.sorted_siswa[i]['kelas']==kelas){

                        if(this.sorted_siswa[i]['LB'].length!=0){
                            return this.sorted_siswa[i]['LB'];
                        }
                        med = this.calculateMedian(this.sorted_siswa[i]['siswa']); 
                        count = 0;
                        for(var j=0; j < this.sorted_siswa[i]['siswa'].length ;++j){
                            if(this.sorted_siswa[i]['siswa'][j]['ratio']<med){
                                id = this.sorted_siswa[i]['siswa'][j]['id'];

                                for(k =0 ; k <this.materis.length; k++){
                                    tt[k] = tt[k] + parseFloat(this.siswa[id][6][k]);
                                }
                                ++count;
                            }
                        }
                        for(k=0; k < this.materis.length ; ++k){
                            tt[k]= tt[k] / parseFloat(count);
                        }
                        this.sorted_siswa[i]['LB']=tt;
                        return tt;
                    }

                }
            },
            argMax(array){
                max=-1;
                id=-1;
                for(var i =0 ; i<array.length; ++i){
                    if(array[i]!=null && array[i]>=max){
                        max=array[i];
                        id=i;
                    }
                }
                
                if(id==-1){
                    return "-";
                }else if(id==0){
                    return "SANGAT KURANG";
                }else if(id==1){
                    return "KURANG";
                }else if(id==2){
                    return "CUKUP";
                }else if(id==3){
                    return "BAIK";
                }else if(id==4){
                    return "SANGAT BAIK";
                }
            },
            computeRofFuzzy(r,value){
                if(r==1){
                    return parseFloat(parseFloat(0.25-value)/parseFloat(0.25-0));  
                }else if(r==2){
                    return (value>0  && value<=0.25)?parseFloat(parseFloat(value-0)/parseFloat(0.25-0)):parseFloat(parseFloat(0.5-value)/parseFloat(0.5-0.25));  
                }else if(r==3){
                    return (value>0.25  && value<=0.5)?parseFloat(parseFloat(value-0.25)/parseFloat(0.5-0.25)):parseFloat(parseFloat(0.75-value)/parseFloat(0.75-0.5));  
                }else if(r==4){
                    return (value>0.5  && value<=0.75)?parseFloat(parseFloat(value-0.5)/parseFloat(0.75-0.5)):parseFloat(parseFloat(1-value)/parseFloat(1-0.75));  
                }else if(r==5){
                    return parseFloat(parseFloat(value-0.75)/parseFloat(1-0.75));  
                }
            },
            showResultPage:function(){
                for(var i = 0 ; i < this.siswa.length ; ++i){
                    ee_ratio = [];
                    tt_ratio = [];
                    true_result = this.getCorrectError(this.siswa[i][5],this.siswa[i][0]);
                    for(var j = 0 ; j < this.materis.length ; ++j ){
                        if(true_result['error'][j]==0){
                            ee_ratio.push(0);
                        }else{
                            r = parseFloat(true_result['error'][j]) / parseFloat(true_result['error'][j]+true_result['correct'][j]);
                            ee_ratio.push(r);
                        }

                        if(true_result['correct'][j]==0){
                            tt_ratio.push(0);
                        }else{
                            r = parseFloat(true_result['correct'][j]) / parseFloat(true_result['error'][j]+true_result['correct'][j]);
                            tt_ratio.push(r);
                        }
                    }
                    indexonclass = $.inArray(this.siswa[i][0],this.kelas);
                    truth_ratio = parseFloat(true_result['correct_count'])/parseFloat(true_result['correct_count']+true_result['error_count']);
                    if(indexonclass==-1){
                        this.kelas.push(this.siswa[i][0]);
                        this.sorted_siswa.push({
                            'kelas':this.siswa[i][0],
                            'ee_total':Array.from(ee_ratio),
                            'tt_total':Array.from(tt_ratio),
                            'count':1,
                            'siswa':[{
                                'ratio':truth_ratio,
                                'id':i
                                }],
                            'LB':[]
                        });
                    }
                    else{
                        for(var j = 0 ; j < this.materis.length ; ++j){
                            this.sorted_siswa[indexonclass]['ee_total'][j] = this.sorted_siswa[indexonclass]['ee_total'][j] + ee_ratio[j]; 
                            this.sorted_siswa[indexonclass]['tt_total'][j] = this.sorted_siswa[indexonclass]['tt_total'][j] + tt_ratio[j]; 
                        }
                        this.sorted_siswa[indexonclass]['count'] = 1 +  this.sorted_siswa[indexonclass]['count'];
                        this.sorted_siswa[indexonclass]['siswa'].push({
                                'ratio':truth_ratio,
                                'id':i
                                });
                    }
                    this.siswa[i].push(ee_ratio);
                    this.siswa[i].push(tt_ratio);
                }

                for(var i =0 ; i < this.siswa.length; ++i){
                    ee_diff = [];
                    tt_diff = [];
                    r = []
                    LB = this.getErrorAverage(this.siswa[i][0]);
                    for(var j = 0; j < this.materis.length ; ++j){
                        if(this.siswa[i][6][j]==0){
                            ee_diff.push(0);
                        }else{
                            ee_diff.push(parseFloat(this.siswa[i][6][j])-(LB[j]));
                        }
                        if(this.siswa[i][7][j]==0){
                            tt_diff.push(0);
                        }else{
                            tt_diff.push(parseFloat(this.siswa[i][7][j])-(parseFloat(this.materis[j][1])/100.0));
                        }
                        r.push(["","","","",""]);
                    }
                    this.siswa[i].push(ee_diff);
                    this.siswa[i].push(tt_diff);
                    ee = this.siswa[i][6];
                    tt = this.siswa[i][7];
                    
                    for(var j = 0 ; j < r.length ; ++j){
                        if(tt[j] == 0 && ee[j]==tt[j]){
                            r[j]=[null,null,null,null,null];
                        }else{
                            // R1
                            if(tt[j]<0.25){
                                r[j][0]=this.computeRofFuzzy(1,tt[j]);
                            }else{
                                r[j][0]=0;
                            }
                            
                            // R2
                            if(tt[j]<0.5 && tt[j]>0){
                                r[j][1]=this.computeRofFuzzy(2,tt[j]);
                            }else{
                                r[j][1]=0;
                            }

                            // R3
                            if(tt[j]<0.75 && tt[j]>0.25){
                                r[j][2]=this.computeRofFuzzy(3,tt[j]);
                            }else{
                                r[j][2]=0;
                            }

                            // R4
                            if(tt[j]<1 && tt[j]>0.5){
                                r[j][3]=this.computeRofFuzzy(4,tt[j]);
                            }else{
                                r[j][3]=0;
                            }
                            
                            // R5
                            if(tt[j]>0.75){
                                r[j][4]=this.computeRofFuzzy(5,tt[j]);
                            }else{
                                r[j][4]=0;
                            }
                        }
                    }
                    this.siswa[i].push(r)
                }

                this.generateEdges();

                this.page=5;
            },
            // checkWheterExist:function(id){
            //     for(var i=0; i < this.relation.length; ++i){
            //         if(this.relation[i][id]==1){
            //             return true;
            //         }
            //     }
            //     return false;
            // },
            // findThePath:function(ofId){
            //     holder = [];
            //     first = true;
            //     isKeepGoing = this.checkWheterExist(ofId);
            // },
            // recursivePath(ofId){
            //     isKeepGoing = this.checkWheterExist(ofId);
            //     x = "";
            //     if(isKeepGoing){
            //         for(var j=0; j < this.relation.length; ++j){
            //             if(this.relation[j][ofId]==1){
            //                 x = x.toString() + this.recursivePath(j);
            //                 if(first){
            //                     holder.push("")
            //                 }
            //             }
            //         }
            //     }
            //     return ofId.toString();
            // },
            generateCriticalTopics:function(ofUser){
                min = 1000*1000;
                id_min = -1;
                for(var i=0; i < this.siswa[ofUser][6].length; ++i ){
                    if(this.siswa[ofUser][8][i]>0){
                        if(this.siswa[ofUser][6][i]<min){
                            id_min=i;
                            min = this.siswa[ofUser][6][i];
                        }
                    }
                }

                for(var i=0 ; i<this.criticalnode.length ; ++i){
                    if(i==id_min){
                        tobelabel = this.materis[i][0] +"(Topik Kritis) [" + this.siswa[ofUser][6][i]+"]";
                        thenode = this.node[i];
                        this.criticalnode.splice(i,1,{id:thenode['id'], label:tobelabel, x: thenode['x'], y:thenode['y'], font:{multi:true, background:"red"} });
                        // theRoute=this.findThePath(id_min);
                    }else{
                        tobelabel = this.materis[i][0] +" [" + this.siswa[ofUser][6][i]+"]";
                        thenode = this.node[i];
                        this.criticalnode.splice(i,1,{id:thenode['id'], label:tobelabel, x: thenode['x'], y:thenode['y'], font:{multi:true} })
                    }
                }

            },
            generateAbility:function(ofUser){
                rOfUser = this.siswa[ofUser][10];
                console.log(rOfUser);
                for(var i=0; i<rOfUser.length; ++i){
                    argmax = this.argMax(rOfUser[i]);
                    thenode = this.node[i];
                    tobelabel = this.materis[i][0] + " ["+ argmax +"]";
                    this.abilitynode.splice(i,1,{id:thenode['id'], label:tobelabel, x: thenode['x'], y:thenode['y'], font:{multi:true} });
                }
            },
            generateEdges:function(){
                this.edge=[];
                for(var i = 0 ; i < this.relation.length ; ++i){
                    for(var j =0; j < this.relation.length ; ++j){
                        if(this.relation[i][j]==1){
                            this.edge.push({
                                'from':j,
                                'to':i,
                            })
                        }
                    }
                }
            },
            resetOption:function(){
                this.option=[];
                for(var i =0 ; i < this.siswa.length ; ++i){
                    this.option.push({'code':i , 'label':'ID'+(i+1)+" - "+this.siswa[i][4]});
                }
            },
            generateDownloadAble:function(){
                x = [];
                for(var i=0; i < this.siswa.length ; ++i){

                    x.push([this.siswa[i][0],this.siswa[i][1],this.siswa[i][2],this.siswa[i][3],this.siswa[i][4],this.siswa[i][5]]);
                }
                var obj = {
                    'soal':this.soals,
                    'siswa':x,
                    'node':this.node,
                    'relation':this.relation,
                    'materi':this.materis,
                };

                var data =  "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
                this.downloadable_data = data;
                this.page=6;
            },
            pleaseUseTheFile:function(){
                this.relation=this.uploaded_data['relation'];
                this.siswa=this.uploaded_data['siswa'];
                this.soals=this.uploaded_data['soal'];
                this.materis=this.uploaded_data['materi'];
                this.node=this.uploaded_data['node'];
                this.edge=[];
                for(var i = 0 ; i < this.relation.length ; ++i){
                    for(var j =0; j < this.relation.length ; ++j){
                        if(this.relation[i][j]==1){
                            this.edge.push({
                                'from':j,
                                'to':i,
                            });
                            console.log(this.edge);
                        }
                    }
                }
                this.page=2;
            },
            async parseObject(event){
                this.usefiledisabled=true;
                var data = await event.target.files[0].text();
                this.uploaded_data=JSON.parse(data);
                this.usefiledisabled=false;
            }
        },
        watch:{
            chosen_result:function(){
                this.generateCriticalTopics(this.chosen_result['code']);
                this.generateAbility(this.chosen_result['code']);
            },
            siswa:function(){
                this.resetOption();
            },
            materis:function(){
                node_temp = this.node;
                this.relation=[];
                this.edge=[];
                this.node=[];
                visheight = ($("#mynetwork").children().first().children().first().height() - 20)/2;
                viswidth = ($("#mynetwork").children().first().children().first().width() - 20)/2;

                for(var i =0; i < this.materis.length ; ++i){
                    if(i<node_temp.length ){
                        this.node.push({id:this.node.length, label:this.materis[i][0], x:node_temp[i]['x'], y:node_temp[i]['y']});
                    }else{
                        visx = Math.floor(Math.random() * viswidth) + 1;
                        isXnegatif = Math.random() < 0.5 ? -1 : 1;
                        visx = visx * isXnegatif;
        
                        visy = Math.floor(Math.random() * visheight) + 1;
                        isYnegatif = Math.random() < 0.5 ? -1 : 1;
                        visY = visy * isYnegatif;
                        
                        if(this.materis[i][0].length == 0){

                            this.node.push({id:this.node.length, label:"C"+(this.node.length+1).toString(), x:visx, y:visy});
                        }else{
                            this.node.push({id:this.node.length, label:this.materis[i][0], x:visx, y:visy});
                        }
                    }
                }
                this.$refs.petakonsep_graph.reset();
            }
        }
    })
