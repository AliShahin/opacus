Search.setIndex({docnames:["clipping","compute_dp_sgd_privacy","dp_lstm","dp_model_inspector","dp_multihead_attention","index","layers","module_inspection","module_modification","per_sample_gradient_clip","per_sample_gradients","privacy_analysis","privacy_engine","scripts","stats","tensor_utils","utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["clipping.rst","compute_dp_sgd_privacy.rst","dp_lstm.rst","dp_model_inspector.rst","dp_multihead_attention.rst","index.rst","layers.rst","module_inspection.rst","module_modification.rst","per_sample_gradient_clip.rst","per_sample_gradients.rst","privacy_analysis.rst","privacy_engine.rst","scripts.rst","stats.rst","tensor_utils.rst","utils.rst"],objects:{"opacus.autograd_grad_sample":{add_hooks:[10,1,1,""],disable_hooks:[10,1,1,""],enable_hooks:[10,1,1,""],is_supported:[10,1,1,""],remove_hooks:[10,1,1,""]},"opacus.dp_model_inspector":{DPModelInspector:[3,2,1,""],IncompatibleModuleException:[3,4,1,""]},"opacus.dp_model_inspector.DPModelInspector":{validate:[3,3,1,""]},"opacus.layers":{dp_lstm:[2,0,0,"-"],dp_multihead_attention:[4,0,0,"-"]},"opacus.layers.dp_lstm":{BidirectionalDPLSTMLayer:[2,2,1,""],DPLSTM:[2,2,1,""],DPLSTMCell:[2,2,1,""],DPLSTMLayer:[2,2,1,""],LSTMLinear:[2,2,1,""]},"opacus.layers.dp_lstm.BidirectionalDPLSTMLayer":{forward:[2,3,1,""]},"opacus.layers.dp_lstm.DPLSTM":{forward:[2,3,1,""]},"opacus.layers.dp_lstm.DPLSTMCell":{forward:[2,3,1,""],reset_parameters:[2,3,1,""]},"opacus.layers.dp_lstm.DPLSTMLayer":{forward:[2,3,1,""]},"opacus.layers.dp_multihead_attention":{DPMultiheadAttention:[4,2,1,""],SequenceBias:[4,2,1,""]},"opacus.layers.dp_multihead_attention.DPMultiheadAttention":{forward:[4,3,1,""],load_state_dict:[4,3,1,""]},"opacus.layers.dp_multihead_attention.SequenceBias":{bias:[4,5,1,""],forward:[4,3,1,""]},"opacus.per_sample_gradient_clip":{PerSampleGradientClipper:[9,2,1,""]},"opacus.per_sample_gradient_clip.PerSampleGradientClipper":{clip_and_accumulate:[9,3,1,""],close:[9,3,1,""],pre_step:[9,3,1,""],set_on_batch_clip_func:[9,3,1,""],zero_grad:[9,3,1,""]},"opacus.privacy_analysis":{compute_rdp:[11,1,1,""],get_privacy_spent:[11,1,1,""]},"opacus.privacy_engine":{PrivacyEngine:[12,2,1,""]},"opacus.privacy_engine.PrivacyEngine":{attach:[12,3,1,""],detach:[12,3,1,""],get_privacy_spent:[12,3,1,""],step:[12,3,1,""],to:[12,3,1,""],virtual_step:[12,3,1,""],zero_grad:[12,3,1,""]},"opacus.scripts":{compute_dp_sgd_privacy:[1,0,0,"-"]},"opacus.scripts.compute_dp_sgd_privacy":{compute_dp_sgd_privacy:[1,1,1,""]},"opacus.supported_layers_grad_samplers":{_supported_layers_grad_samplers:[10,5,1,""]},"opacus.utils":{clipping:[0,0,0,"-"],module_inspection:[7,0,0,"-"],module_modification:[8,0,0,"-"],stats:[14,0,0,"-"],tensor_utils:[15,0,0,"-"]},"opacus.utils.clipping":{ClippingMethod:[0,2,1,""],ConstantFlatClipper:[0,2,1,""],ConstantPerLayerClipper:[0,2,1,""],NormClipper:[0,2,1,""]},"opacus.utils.clipping.ConstantFlatClipper":{calc_clipping_factors:[0,3,1,""],is_per_layer:[0,3,1,""],thresholds:[0,3,1,""]},"opacus.utils.clipping.ConstantPerLayerClipper":{calc_clipping_factors:[0,3,1,""],is_per_layer:[0,3,1,""],thresholds:[0,3,1,""]},"opacus.utils.clipping.NormClipper":{calc_clipping_factors:[0,3,1,""],is_per_layer:[0,3,1,""],thresholds:[0,3,1,""]},"opacus.utils.module_inspection":{ModelInspector:[7,2,1,""],get_layer_type:[7,1,1,""],has_no_param:[7,1,1,""],requires_grad:[7,1,1,""]},"opacus.utils.module_inspection.ModelInspector":{validate:[7,3,1,""]},"opacus.utils.module_modification":{convert_batchnorm_modules:[8,1,1,""],nullify_batchnorm_modules:[8,1,1,""],replace_all_modules:[8,1,1,""]},"opacus.utils.stats":{Stat:[14,2,1,""],StatType:[14,2,1,""],add:[14,1,1,""],clear:[14,1,1,""],remove:[14,1,1,""],reset:[14,1,1,""],set_global_summary_writer:[14,1,1,""],update:[14,1,1,""]},"opacus.utils.stats.Stat":{log:[14,3,1,""],reset:[14,3,1,""]},"opacus.utils.tensor_utils":{calc_sample_norms:[15,1,1,""],sum_over_all_but_batch_and_last_n:[15,1,1,""],unfold3d:[15,1,1,""]},opacus:{autograd_grad_sample:[10,0,0,"-"],dp_model_inspector:[3,0,0,"-"],per_sample_gradient_clip:[9,0,0,"-"],privacy_analysis:[11,0,0,"-"],privacy_engine:[12,0,0,"-"],supported_layers_grad_samplers:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","exception","Python exception"],"5":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:exception","5":"py:attribute"},terms:{"0618":15,"0th":15,"100":1,"120":15,"128":12,"2048":12,"256":1,"5117":15,"598":10,"60000":1,"abstract":0,"boolean":7,"case":[0,2,3],"class":[0,2,3,4,7,8,9,12,14],"default":[2,8,12,14],"enum":14,"export":2,"final":[0,9],"float":[0,1,11,12,14],"function":[1,2,4,7,8,9,10,11,12,14,15],"import":[8,12],"int":[1,4,9,11,12,15],"new":[0,2],"return":[0,1,2,3,7,8,9,10,11,12,15],"throw":3,"true":[0,1,2,3,4,7,9,10,12,15],"while":[2,4,12],For:[0,4],Its:[2,11,14],That:12,The:[0,1,3,7,9,10,11,12,14],Then:12,There:9,Use:14,Used:12,Useful:14,_batchnorm:8,_batchnorm_to_groupnorm:8,_supported_layers_grad_sampl:10,about:[7,14],acc1:14,acc1_valu:14,account:[1,12],accross:12,accumul:[2,9,12,14],accuraci:14,achiev:9,across:14,action:15,activ:[3,10,14],add:[4,10,12,14],add_bias_kv:4,add_hook:10,add_scalar:14,add_zero_attn:4,added:[1,9,10,11,12,14,15],adding:[9,14],addit:11,advantag:12,affect:[8,9,14],after:[2,9,12],afterward:[2,4],aggreg:[9,10,12,15],all:[0,2,3,4,7,8,9,10,11,12,14,15],alloc:12,allow:[4,14],alpha:[1,11,12],alreadi:14,altern:12,although:[2,4],alwai:[7,9,10],amen:2,amount:12,analysi:[1,5],ani:[7,12,14],anoth:[8,14],appear:[9,10],appli:[0,1,7,9,11],applic:2,arang:15,arbitrari:12,arg:14,argument:[2,12],around:14,arrai:11,assum:15,attach:[3,9,12,14],attn_mask:4,attribut:[3,9,12],autograd:5,autograd_grad_sampl:10,automat:[9,12],avail:10,averag:[9,12,14],avg:14,avoid:9,b_sz:9,back:9,backprop:10,backpropag:[9,10],backward:[2,9,10,12],base:[0,1,4,10,11],batch:[1,2,4,9,10,12,15],batch_first:[2,9,10,12],batch_siz:[1,9,10,12],batchnorm1d:[3,8],batchnorm2d:8,batchnorm:8,been:[9,10],befor:[0,9,12],behavi:12,behaviour:10,being:[2,7,10,12,15],benefici:12,best:12,better:0,bia:[2,4],bidirect:2,bidirectionaldplstmlay:2,blob:[1,11],block:[4,15],bn1:8,bool:[0,1,3,7,9,10,12,15],both:[2,4,15],bound:[0,9],budget:[1,12],build:4,busi:12,c_0:2,c_n:2,c_prev:2,calc_clipping_factor:0,calc_sample_norm:15,calcul:[0,4,10,15],call:[1,2,3,4,9,12,14],callabl:[7,8,9,10],can:[1,2,9,10,11,12,14],cannot:9,cap:0,captur:10,care:[2,4],cat:9,cell:2,check:[3,7,10],check_leaf_nodes_onli:7,children:7,clean:12,clear:14,clip:[5,12,14,16],clip_and_accumul:9,clipper:[0,9,12],clippingmethod:0,close:9,code:[1,11,14],collect:[9,10,14],com:[1,10,11],come:12,command:1,common:[0,14],compliant:8,compon:12,compris:3,comput:[2,4,5,9,10,11,12,13],compute_accuraci:14,compute_dp_sgd_privaci:1,compute_rdp:11,concaten:[2,12],concret:0,condit:7,constant:[0,12],constantflatclipp:0,constantperlayerclipp:0,constraint:9,constructor:3,consum:12,consumpt:12,contain:[0,2,3,12],contrast:4,contribut:10,conv2d:7,converg:8,convert:[8,12],convert_batchnorm_modul:8,correct:10,correspond:[0,7,9,10,12],cost:12,could:[9,14],cover:14,cpu:12,creat:14,creation:7,criterion:12,cuda:12,current:[4,10,12,14],cybertronai:10,dataload:12,dataset:[1,12],defin:[2,4,9,12],delet:9,delta:[1,11,12],depend:[0,3,11],desir:0,detach:12,detail:[3,8,15],determin:10,deviat:[1,11,12],devic:12,dict:[10,14],dictionari:14,differ:[0,9],differenti:[2,9,11,12,14],dim:15,dimens:[0,2,4,9,10,12,15],direct:2,directli:[2,12,14],disabl:10,disable_hook:10,discard:12,displai:14,distribut:2,doc:12,document:2,doe:[7,12],don:[2,14],downstream:10,dp_lstm:2,dp_model_inspector:3,dp_multihead_attent:4,dplstm:[5,6],dplstmcell:2,dplstmlayer:2,dpmodelinspector:3,dpmultiheadattent:[5,6],drop:2,dropout:[2,4],dtype:11,dure:[10,14],each:[0,2,3,9,12,15],easier:14,effect:[0,12],effici:12,either:3,element:4,els:[2,9,10,12],embed:[2,4],embed_dim:4,enabl:[1,10,12],enable_hook:10,encapsul:9,end:4,engin:[4,5,8,9],ensur:[9,12],enter:1,entir:9,enumer:[0,12],epoch:[1,12],eps:8,epsilon:[1,11,12,14],equal:[0,8,11],eras:12,error:3,estim:1,etc:[7,8,14],evalu:7,everi:[2,4,12,14],evolv:14,exactli:2,examin:7,exampl:[1,3,4,7,8,9,10,11,12,14,15],except:[2,3,15],exclud:15,exist:14,expect:2,experi:12,extern:14,extract:15,factor:0,fail:3,failur:3,fals:[0,2,3,4,7,9,10,12,14],far:12,featur:2,field:[9,12],file:14,find:1,first:[9,10,12,15],fit:12,flag:[0,3,7,9,10,12,15],flat:[0,9,15],flat_valu:0,flatten:9,follow:[2,9,12,14],former:[2,4],forward:[2,4,10,12],frequenc:14,friendli:[2,4],from:[1,2,4,8,9,10,12,14,15],full:4,further:9,gather:14,gaussian:[1,9,11,12],gener:[12,14,15],get:[2,7,9,12,14],get_layer_typ:7,get_privacy_sp:[11,12],github:[1,10,11],given:[0,2,3,7,8,10,11,14,15],global:[10,14],googl:[1,11],gpu:12,grad:[5,9,14],grad_sampl:[2,9,10,12],gradient:[0,4,5,7,12,14],greater:[1,9,12],groupnorm:8,guarante:[11,12],h_0:2,h_n:2,h_prev:2,h_t:2,hack:10,handl:12,has:[4,7,9,10,12],has_no_param:7,have:[4,7,8,9,11,12,14],heavili:8,here:[7,9,11,12],hidden:2,hidden_s:2,higher:12,hist:14,hold:7,hook:[2,4,9,10],how:[12,14],howev:10,html:[4,12],http:[1,4,10,11,12],hypothesi:7,idea:12,ident:8,identifi:14,ignor:[2,4,15],imag:15,imagin:12,implement:[0,2,4,10,14,15],impli:[9,10],implicit:15,in_featur:2,includ:[7,8],incompat:3,incompatiblemoduleexcept:3,index:5,indic:[0,7,9,10,12],individu:3,inf:11,infer:2,init:12,initi:[2,4,12],inject:12,input:[1,2,4,9,10,12,15],input_s:2,insid:[12,14],insight:14,inspect:[5,16],inspector:[3,7],instal:10,instanc:[2,4,8,14],instanti:[0,12,14],instead:[0,2,4,14],intent:12,interfac:14,intern:[2,4,12,14],invalid_model:3,involv:[0,9],is_per_lay:0,is_support:10,is_valid:3,isinst:7,isn:8,issu:[9,10],iter:[0,1,11,12,14,15],its:[0,3,9],itself:12,just:[9,12,14],kdim:4,keep:[9,12,15],kei:4,kernel_s:15,key_padding_mask:4,known:10,lambda:[7,8],larg:12,larger:12,last:[2,12,15],later:[12,14],latter:[2,4],layer1:8,layer:[0,2,4,5,7,8,9,12,15],leaf:7,learnabl:4,length:[2,4,11,15],less:0,leverag:4,librari:10,like:[7,14,15],line:[1,12,14],linear:[2,3,12],list:[0,1,3,11,12,15],load:[2,4],load_state_dict:4,local:15,locat:14,log:14,logit:12,loss:[1,9,10,12,14],loss_reduct:[9,10,12],lstm:2,lstmcell:2,lstmlinear:2,main:[12,14],mainli:1,make:9,map:[2,10],master:[1,11],match:[2,9],max_grad_norm:12,max_ord:11,maximum:[9,12],mean:[9,10,12,14],measur:9,mechan:[1,9,11],meet:3,memori:12,mention:9,messag:[3,7],meter:14,method:[3,8,10,12,15],metric:14,might:12,mini:[9,12],misc_set:12,model:[0,1,2,5,7,8,9,10,12],modelinspector:[3,7],modif:[5,16],modifi:8,modul:[2,3,4,5,9,10,12,16],module_inspect:7,module_modif:8,monitor:14,monkeypatch:12,more:15,most:[0,8,9],move:12,multiheadattent:4,multipl:11,multipli:0,must:[0,2,7],n_dim:15,n_total_param:9,name:[2,7,10,14,15],named_param:15,named_valu:14,namespac:14,need:[2,4,8,10,12,14],need_weight:4,net:0,never:12,next:12,node:7,nois:[1,9,11,12,14],noise_multipli:[1,11,12],non:7,none:[2,4,7,9,12,14],norm:[0,9,12,15],norm_clipp:9,normal:[0,9],normclipp:[0,9],note:[0,2,3,7,8,9,10,11,12],now:[10,12],nullify_batchnorm_modul:8,num_head:4,num_lay:2,number:[1,2,11,12,15],nxb:12,object:[0,9,12,14],observ:14,off:12,old:2,on_batch_clip_func:9,onc:14,one:[2,3,4,8,14],ones:[7,14,15],onli:[2,7,9,10,12,14,15],opacu:[0,1,2,3,4,7,8,9,10,11,12,14,15],oper:[8,9,10,12],opt_ord:11,optim:[1,9,11,12],option:[2,7,12,14],order:[1,11,12],org:[4,12],origin:[4,12],original_step:12,other:[12,14],out:14,out_featur:2,output:[2,4,15],over:[9,15],overal:15,overridden:[2,4],own:7,pad:15,page:5,pair:[1,11,12],param:[10,15],paramet:[0,1,2,3,4,7,8,9,10,11,12,14,15],parameter:9,pass:[2,4,9,10,14],per:[0,4,5,9,12],per_sample_gradient_clip:9,perform:[1,2,4,12],persamplegradientclipp:9,pleas:4,pointer:12,popul:9,potenti:8,pre_step:9,predic:[3,7],prefer:12,prepar:9,previous:4,print:[1,4,7,8],prior:9,privaci:[2,5,8,9,13,14],privacy_analysi:11,privacy_engin:[3,9,12],privacyengin:[3,9,12],process:[0,1,9,14],product:15,propag:10,proper:14,properli:[9,14],properti:0,provid:[7,8,9,10,14],put:9,python:[1,11],pytorch:[4,7,10,12],q_1:11,q_k:11,queri:[4,7,12],rais:[1,3,11,12],rand:15,randn:4,random:12,rang:[11,12,14],rate:[1,11],rather:12,ratio:[1,11,12],rdp:[1,11,12],rdp_account:11,real:9,realli:0,reason:3,recip:[2,4],recommend:12,recurs:7,reduct:[9,10,12,14],refer:[2,4],regist:[2,4],register_backward_hook:10,regular:9,remov:[9,10,12,14],remove_hook:10,renam:2,rename_map:2,renyi:11,repeat:[2,9],repeatedli:12,replac:[2,8,9],replace_all_modul:8,report:14,repres:[7,9,10,12],requir:[3,7],requires_grad:7,reset:[2,12,14],reset_paramet:2,resnet18:8,resnet50:8,respect:9,result:[1,14],revers:2,right:12,root:8,rough:12,round:12,row:9,run:[2,3,4,11,12],safeti:9,same:[2,8,11,15],sampl:[1,4,5,9,11,12,14,15],sample_s:[1,12],sample_stat:14,sampler:5,satisfi:[1,7],save:[4,10],scalar:11,scale:[0,9],script:[1,5],scriptmodul:[2,4],search:5,second:[9,10],secur:12,secure_rng:12,see:[4,12,14,15],seen:2,self:0,sensit:[1,9,11,12],separ:0,sequenc:[2,4],sequencebia:4,sequenti:7,seri:3,set:[7,9,10,12,14,15],set_global_summary_writ:14,set_on_batch_clip_func:9,sgd:[5,12,13],sgm:11,shape:[2,4,9,10,15],share:[0,2,4],should:[2,3,4,7,9,12],should_throw:3,show:12,shown:14,side:15,sigma:11,sigma_1:11,sigma_k:11,signific:12,silent:[2,4],similar:14,simpl:7,simul:12,sinc:[2,4],singl:[0,9],singleton:0,size:[1,2,4,9,12,15],slice:9,slide:15,smaller:[9,12],some:14,sourc:[0,1,2,3,4,7,8,9,10,11,12,14,15],spatial:15,specif:7,specifi:[0,7],spent:12,stabl:12,standard:[1,2,11,12],stat:[5,9,15,16],stat_typ:14,state:[2,4,12],state_dict:[2,4],state_init:2,statist:[9,14],stattyp:14,statu:12,step:[1,2,9,11,12],steps_1:11,steps_k:11,stop:14,store:[9,12],str:[7,9,10,12,14,15],strategi:[9,14],stride:15,string:[7,15],sub:[7,8],subclass:[0,2,4],submodul:[3,8],success:3,suggest:10,sum:[9,10,12,15],sum_over_all_but_batch_and_last_n:15,summary_writ:14,summarywrit:14,summed_grad:9,suppli:14,support:[4,8,10,14,15],supported_layers_grad_sampl:10,suppos:11,sure:9,take:[2,4,9,10,12],target:[1,8,11,12],target_class:8,target_delta:12,tensor:[0,2,5,9,10,12,16],tensor_attribut:12,tensor_util:15,tensorboard:14,tensorflow:[1,11],tensorflow_privaci:[1,11],test:[7,14],than:[0,1,9,12],thei:[9,12],them:[2,4,9,10,14],therefor:12,thi:[0,1,2,3,4,7,8,9,10,11,12,14,15],thing:14,think:0,threshold:[0,9],thrown:3,thu:[0,9,12],time:[8,9,11,12,14],timestep:2,togeth:[9,12],too:12,top:9,torch:[2,4,8,9,12,15],torchcsprng:12,torchvis:8,total:9,track:10,train:[1,2,12,14],tupl:[1,2,9,11,12,15],turn:12,tutori:4,two:[9,10],type:[0,1,2,3,4,7,8,9,10,11,12,14,15],under:[9,14],unfold3d:15,unfold:15,uniform:2,union:[0,11,12,15],uniqu:14,unless:7,unnecessarili:14,unsupport:12,updat:[11,14],upon:7,upper:0,usag:12,use:[2,9,12,14],used:[0,2,9,14],useful:8,using:[7,8,10,12,14],usual:12,util:[5,7,8,14],val:14,valid:[5,7,12,14],valid_model:3,valu:[0,4,7,8,9,10,11,12,14],valueerror:[1,11,12],variabl:12,vdim:4,vector:9,verbos:1,veri:10,verifi:10,view:[14,15],violat:7,virtual:12,virtual_step:12,visual:14,wai:[0,2,10],want:[2,12,14],weight:12,welcom:10,were:9,what_is_state_dict:4,when:[0,1,2,9,11,12,15],whenev:[2,12],where:[2,4,9,14,15],whether:[0,3,10],which:[1,2,7,8,9,10,11,12],whose:7,wish:11,within:[2,4],without:9,word:2,work:9,would:[11,12],wrapper:14,you:[1,2,9,12,14],your:[2,10,12,14],zero:[2,15],zero_grad:[9,12],zeros_lik:11},titles:["Clipping Utils","Compute DP-SGD Privacy","DPLSTM","Model Validation","DPMultiheadAttention","Opacus API Reference","DP Layers","Module Inspection","Module Modification","Gradient Clipping","Per Sample Gradients","Privacy Analysis","Privacy Engine","Scripts","Stats","Tensor Utils","Utils"],titleterms:{analysi:11,api:5,autograd:10,clip:[0,9],comput:1,dplstm:2,dpmultiheadattent:4,engin:12,grad:10,gradient:[9,10],indic:5,inspect:7,layer:[6,10],model:3,modif:8,modul:[7,8],opacu:5,per:10,privaci:[1,11,12],refer:5,sampl:10,sampler:10,script:13,sgd:1,stat:14,tabl:5,tensor:15,util:[0,15,16],valid:3}})