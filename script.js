Vue.component('v-select', VueSelect.VueSelect)
var app = new Vue({
        el: '#app-container',
        data: {
            page : 2,
            jawabanfile:false,
            ovs_option:false,
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

                // ["4","SA16","",[0,0,5,0,0,0,0,0,0,0,5]],
                // ["4","SA17","",[0,0,5,0,0,0,0,0,0,0,5]],
                // ["4","SA18","",[0,0,5,0,0,0,0,0,0,0,5]],
                // ["4","SA19","",[0,0,5,0,0,0,0,0,0,0,5]],
                // ["4","SA20","",[0,0,5,0,0,0,0,0,0,0,5]],
                // ["4","SB16","",[0,0,5,0,0,4,5,5,0,0,0]],
                // ["4","SB17","",[0,0,5,0,0,4,5,5,0,0,0]],
                // ["4","SB18","",[0,0,5,0,0,4,5,5,0,0,0]],
                // ["4","SB19","",[0,0,5,0,0,4,0,5,5,0,0]],
                // ["4","SB20","",[0,0,5,0,0,5,5,0,5,0,0]],

                // ["5","SA21","",[0,0,5,0,0,5,0,0,0,0,5]],
                // ["5","SA22","",[0,0,5,0,0,0,0,0,5,0,5]],
                // ["5","SA23","",[0,0,5,0,0,5,0,0,0,0,5]],
                // ["5","SA24","",[0,0,0,0,0,0,5,0,0,0,5]],
                // ["5","SA25","",[0,0,0,0,0,0,0,0,5,0,5]],
                // ["5","SB21","",[0,0,0,0,0,0,5,0,5,0,5]],
                // ["5","SB22","",[0,0,0,0,0,0,5,0,5,0,5]],
                // ["5","SB23","",[0,0,0,0,0,0,5,0,5,0,5]],
                // ["5","SB24","",[0,0,0,0,0,0,5,0,5,0,5]],
                // ["5","SB25","",[0,0,5,0,0,5,5,0,5,0,5]],

                // ["6","SA26","",[0,0,0,0,0,0,4,0,5,5,0]],
                // ["6","SA27","",[0,0,0,0,0,0,4,0,5,5,0]],
                // ["6","SA28","",[0,0,0,0,0,0,4,0,5,5,0]],
                // ["6","SA29","",[0,0,0,0,0,0,4,0,5,5,0]],
                // ["6","SA30","",[0,0,0,0,0,0,4,0,5,5,0]],
                // ["6","SB26","",[0,0,5,0,0,0,4,0,5,0,0]],
                // ["6","SB27","",[0,0,5,0,0,0,4,0,5,0,0]],
                // ["6","SB28","",[0,0,5,0,0,0,4,0,5,0,0]],
                // ["6","SB29","",[0,0,5,0,0,0,0,0,0,0,0]],
                // ["6","SB30","",[0,0,5,0,0,0,0,0,0,0,0]],
                
                ],
            relation:[],
            node : [
                {id:0,label:"C1",x:-225, y:-100},
                {id:1,label:"C2",x:0, y:-200},
                {id:2,label:"C3",x:-125, y:-100},
                {id:3,label:"C4",x:25, y:-100},
                {id:4,label:"C5",x:225, y:-100},
                {id:5,label:"C6",x:-175, y:0},
                {id:6,label:"C7",x:-25, y:0},
                {id:7,label:"C8",x:-225, y:100},
                {id:8,label:"C9",x:-125, y:100},
                {id:9,label:"C10",x:-175, y:200},
                {id:10,label:"C11",x:-25, y:200},
            ],
            criticalnode:[],
            abilitynode:[],
            edge:[],
            siswa:[
                    ["3","1","","","","111111111111101110000011000000"],
                    ["3","2","","","","111111111111111110111011010000"],
                    ["3","3","","","","110110111110101001000101001100"],
                    ["3","4","","","","111111111110101000100111001010"],
                    ["3","6","","","","111110000011111000001111100000"],
                    ["3","8","","","","111111111111101010010111100101"],
                    ["3","10","","","","111111111101101000100111110100"],
                    ["3","11","","","","111111111101101100010011100000"],
                    ["3","13","","","","111111111110101001000000000010"],
                    ["3","14","","","","111111111100101110000111110100"],
                 ],
            kelas:[],
            option:[
                {'code':0,'label':'ID1'},
                {'code':1,'label':'ID2'},
                {'code':2,'label':'ID3'},
                {'code':3,'label':'ID4'},
                {'code':4,'label':'ID5'},
                {'code':5,'label':'ID6'},
                {'code':6,'label':'ID7'},
                {'code':7,'label':'ID8'},
                {'code':8,'label':'ID9'},
                {'code':9,'label':'ID10'},
                {'code':10,'label':'ID11'},
            ],
            chosen_result:"",
            sorted_siswa:[],
        },
        components:{
            'ovs-network':{
                template: "#mytmp",
                data() {
                    return {
                        nodes: this.$root.node,
                        edges: [
                        ],
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
            onpageload:function(){
                this.getChartConfig();
            },
            created:function(){
                this.onpageload();
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

                this.node.push({id:this.node.length, label:"C"+(this.node.length+1).toString(), x:visx, y:visy});

                this.materis.push(["",""]);
                for(var i=0 ; i < this.bobots.length ; ++i){
                    this.bobots[i].push("");
                }

                this.soals[0][3].push(0);
            },
            delMateri:function(index){
                this.materis.splice(index,1);
                this.node.splice(this.node.length-1,1);
                this.soals[0][3].splice(index,1);
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
            showResultPage:function(){
                console.log("part 1");
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

                console.log("part2");
                for(var i =0 ; i < this.siswa.length; ++i){
                    ee_diff = [];
                    tt_diff = [];
                    LB = this.getErrorAverage(this.siswa[i][0]);
                    console.log(LB);
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
                    }
                    this.siswa[i].push(ee_diff);
                    this.siswa[i].push(tt_diff);
                    
                }
                this.generateEdges();

                this.page=5;
            },
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
                        this.criticalnode.splice(i,1,{id:thenode['id'], label:tobelabel, x: thenode['x'], y:thenode['y'], font:{multi:true, background:"red"} })
                    }else{
                        tobelabel = this.materis[i][0] +" [" + this.siswa[ofUser][6][i]+"]";
                        thenode = this.node[i];
                        this.criticalnode.splice(i,1,{id:thenode['id'], label:tobelabel, x: thenode['x'], y:thenode['y'], font:{multi:true} })
                    }
                }

            },
            generateAbility:function(ofUser){},
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
            }
        },
        watch:{
            materis:function(){

            },
            chosen_result:function(){
                this.generateCriticalTopics(this.chosen_result['code']);
                this.generateAbility(this.chosen_result['code']);
            }
        }
    })
