Search.setIndex({docnames:["CoordSys","ExtrapMethod","FileFormat","FileMode","GridItem","LineType","LogKind","MeshElemType","MeshLoc","NormType","PoleKind","PoleMethod","Region","RegridMethod","StaggerLoc","TypeKind","UnmappedAction","api","appendix","examples","field","grid","index","install","intro","locstream","manager","mesh","regrid","regridfromfile"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,sphinx:56},filenames:["CoordSys.rst","ExtrapMethod.rst","FileFormat.rst","FileMode.rst","GridItem.rst","LineType.rst","LogKind.rst","MeshElemType.rst","MeshLoc.rst","NormType.rst","PoleKind.rst","PoleMethod.rst","Region.rst","RegridMethod.rst","StaggerLoc.rst","TypeKind.rst","UnmappedAction.rst","api.rst","appendix.rst","examples.rst","field.rst","grid.rst","index.rst","install.rst","intro.rst","locstream.rst","manager.rst","mesh.rst","regrid.rst","regridfromfile.rst"],objects:{"":{ESMF:[24,0,0,"-"]},"ESMF.api.constants":{CoordSys:[0,1,1,""],ExtrapMethod:[1,1,1,""],FileFormat:[2,1,1,""],FileMode:[3,1,1,""],GridItem:[4,1,1,""],LineType:[5,1,1,""],LogKind:[6,1,1,""],MeshElemType:[7,1,1,""],MeshLoc:[8,1,1,""],NormType:[9,1,1,""],PoleKind:[10,1,1,""],PoleMethod:[11,1,1,""],Region:[12,1,1,""],RegridMethod:[13,1,1,""],StaggerLoc:[14,1,1,""],TypeKind:[15,1,1,""],UnmappedAction:[16,1,1,""]},"ESMF.api.constants.CoordSys":{CART:[0,2,1,""],SPH_DEG:[0,2,1,""],SPH_RAD:[0,2,1,""]},"ESMF.api.constants.ExtrapMethod":{CREEP_FILL:[1,2,1,""],NEAREST_IDAVG:[1,2,1,""],NEAREST_STOD:[1,2,1,""],NONE:[1,2,1,""]},"ESMF.api.constants.FileFormat":{ESMFGRID:[2,2,1,""],ESMFMESH:[2,2,1,""],GRIDSPEC:[2,2,1,""],SCRIP:[2,2,1,""],UGRID:[2,2,1,""],VTK:[2,2,1,""]},"ESMF.api.constants.FileMode":{BASIC:[3,2,1,""],WITHAUX:[3,2,1,""]},"ESMF.api.constants.GridItem":{AREA:[4,2,1,""],MASK:[4,2,1,""]},"ESMF.api.constants.LineType":{CART:[5,2,1,""],GREAT_CIRCLE:[5,2,1,""]},"ESMF.api.constants.LogKind":{MULTI:[6,2,1,""],NONE:[6,2,1,""]},"ESMF.api.constants.MeshElemType":{HEX:[7,2,1,""],QUAD:[7,2,1,""],TETRA:[7,2,1,""],TRI:[7,2,1,""]},"ESMF.api.constants.MeshLoc":{ELEMENT:[8,2,1,""],NODE:[8,2,1,""]},"ESMF.api.constants.NormType":{DSTAREA:[9,2,1,""],FRACAREA:[9,2,1,""]},"ESMF.api.constants.PoleKind":{BIPOLE:[10,2,1,""],MONOPOLE:[10,2,1,""],NONE:[10,2,1,""]},"ESMF.api.constants.PoleMethod":{ALLAVG:[11,2,1,""],NONE:[11,2,1,""],NPNTAVG:[11,2,1,""],TEETH:[11,2,1,""]},"ESMF.api.constants.Region":{EMPTY:[12,2,1,""],SELECT:[12,2,1,""],TOTAL:[12,2,1,""]},"ESMF.api.constants.RegridMethod":{BILINEAR:[13,2,1,""],CONSERVE:[13,2,1,""],CONSERVE_2ND:[13,2,1,""],NEAREST_DTOS:[13,2,1,""],NEAREST_STOD:[13,2,1,""],PATCH:[13,2,1,""]},"ESMF.api.constants.StaggerLoc":{CENTER:[14,2,1,""],CENTER_VCENTER:[14,2,1,""],CENTER_VFACE:[14,2,1,""],CORNER:[14,2,1,""],CORNER_VCENTER:[14,2,1,""],CORNER_VFACE:[14,2,1,""],EDGE1:[14,2,1,""],EDGE1_VCENTER:[14,2,1,""],EDGE1_VFACE:[14,2,1,""],EDGE2:[14,2,1,""],EDGE2_VCENTER:[14,2,1,""],EDGE2_VFACE:[14,2,1,""]},"ESMF.api.constants.TypeKind":{I4:[15,2,1,""],I8:[15,2,1,""],R4:[15,2,1,""],R8:[15,2,1,""]},"ESMF.api.constants.UnmappedAction":{ERROR:[16,2,1,""],IGNORE:[16,2,1,""]},"ESMF.api.esmpymanager":{Manager:[26,1,1,""]},"ESMF.api.field":{Field:[20,1,1,""]},"ESMF.api.field.Field":{copy:[20,3,1,""],data:[20,3,1,""],destroy:[20,3,1,""],get_area:[20,3,1,""],grid:[20,3,1,""],lower_bounds:[20,3,1,""],name:[20,3,1,""],ndbounds:[20,3,1,""],rank:[20,3,1,""],read:[20,3,1,""],staggerloc:[20,3,1,""],type:[20,3,1,""],upper_bounds:[20,3,1,""],xd:[20,3,1,""]},"ESMF.api.grid":{Grid:[21,1,1,""]},"ESMF.api.grid.Grid":{add_coords:[21,3,1,""],add_item:[21,3,1,""],area:[21,3,1,""],areatype:[21,3,1,""],coord_sys:[21,3,1,""],coords:[21,3,1,""],copy:[21,3,1,""],destroy:[21,3,1,""],get_coords:[21,3,1,""],get_item:[21,3,1,""],has_corners:[21,3,1,""],lower_bounds:[21,3,1,""],mask:[21,3,1,""],max_index:[21,3,1,""],num_peri_dims:[21,3,1,""],periodic_dim:[21,3,1,""],pole_dim:[21,3,1,""],rank:[21,3,1,""],size:[21,3,1,""],staggerloc:[21,3,1,""],type:[21,3,1,""],upper_bounds:[21,3,1,""]},"ESMF.api.locstream":{LocStream:[25,1,1,""]},"ESMF.api.locstream.LocStream":{copy:[25,3,1,""],destroy:[25,3,1,""],lower_bounds:[25,3,1,""],name:[25,3,1,""],rank:[25,3,1,""],size:[25,3,1,""],upper_bounds:[25,3,1,""]},"ESMF.api.mesh":{Mesh:[27,1,1,""]},"ESMF.api.mesh.Mesh":{add_elements:[27,3,1,""],add_nodes:[27,3,1,""],area:[27,3,1,""],coord_sys:[27,3,1,""],coords:[27,3,1,""],copy:[27,3,1,""],destroy:[27,3,1,""],free_memory:[27,3,1,""],get_coords:[27,3,1,""],mask:[27,3,1,""],rank:[27,3,1,""],size:[27,3,1,""],size_owned:[27,3,1,""]},"ESMF.api.regrid":{Regrid:[28,1,1,""],RegridFromFile:[29,1,1,""]},"ESMF.api.regrid.Regrid":{__call__:[28,3,1,""],copy:[28,3,1,""],destroy:[28,3,1,""],get_factors:[28,3,1,""],get_weights_dict:[28,3,1,""]},"ESMF.api.regrid.RegridFromFile":{__call__:[29,3,1,""],copy:[29,3,1,""],destroy:[29,3,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method"},terms:{"02707409":17,"120":17,"14159":19,"141592653589793":19,"180":[17,19],"1e20":19,"1st":19,"1x2":21,"2015":18,"2016":19,"2017":19,"2gb":28,"2nd":19,"32224085":17,"350":19,"357":19,"3rd":19,"422397696":19,"5deg_grid":19,"boolean":[17,19,21,27],"break":17,"byte":15,"case":[17,19],"catch":[17,19],"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20,21,22,23,25,26,27,28,29],"default":[1,5,17,20,21,23,25,26,27,28,29],"final":[17,26],"float":[19,21,27,28],"function":[17,22,24,28,29],"import":[17,19,22],"int":[20,21,25,27,28],"long":[10,17],"new":[1,11,19,23],"return":[16,19,20,21,25,26,27,28,29],"short":17,"true":[17,19,21,28],"try":[17,19],"while":[17,24,28],DEs:21,For:[13,17,20,21,25,27,28,29],Ids:[17,19],Los:18,NOT:[17,21,27],One:[12,17],The:[1,2,4,7,8,11,13,17,19,20,21,22,23,24,25,26,27,28,29],Their:25,Then:17,There:[17,23,24,25],These:[17,19,24,28],Use:[2,6],Using:[17,22],__call__:[28,29],__del__:26,__init__:26,_esmf_mpirun_np:19,abil:23,abl:[11,25],about:[17,20,21,25,27,28,29],abov:[11,17],abs:19,access:[17,18,24],accomplish:17,accord:28,account:[13,19],achiev:17,across:[11,13,17,21,24],action:[16,17,28],activ:17,actual:23,add:[17,19,21,27],add_ax:19,add_coord:[19,21],add_corner_stagg:[17,19,21],add_el:[17,19,27],add_item:[17,19,21],add_mask:[17,21],add_nod:[17,19,27],add_subplot:19,add_user_area:[17,21,27],added:[23,27],adding:[17,27,28,29],addit:[9,17,28],affect:[17,23],after:[1,13,17,27,28],again:23,alamo:18,algorithm:24,alia:26,alias:[21,27],all:[1,5,11,17,19,20,21,24,25,27],allavg:[11,28],alloc:[19,20,21,22,27],allow:[9,17,23,26,27,28],alon:19,along:[5,17,27,28],alreadi:[1,21],also:[0,1,3,9,13,17,21,24,26,27],alter:17,altern:23,alwai:[17,26,27,28],ambigu:17,among:17,amount:[13,28],anaconda:22,analog:[28,29],analysi:24,analyt:22,ani:[12,17,19,23,24,25,28],anoth:[13,17],antipod:17,api:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,19,20,21,22,23,25,26,27,28,29],appar:13,appear:17,appendic:22,appli:[12,17,19,23,28],applic:[5,17,23,24,26,28],appropri:[17,24,25],approxim:[5,13],arakawa:17,arang:[17,19],arbitrari:19,architectur:23,area:[4,9,19,20,21,24,27],areafield:19,areatyp:21,arg:[17,19],argument:[5,17,19,20,21,25,27,28,29],argv:[17,19],around:[11,17],arrai:[17,19,20,21,25,27,28],artifici:[11,17,28],ask:19,aspect:[19,23],assert:19,assign:[17,21],assimil:[17,25],associ:[17,20,21,25,27,28,29],assum:17,assumpt:[17,25],atexit:26,atmospher:24,attach:[17,28],attempt:17,attribut:21,auto:19,avail:[17,19,21,23,24,28],averag:[1,11,13,17,28],avoid:17,backend:[17,19],bandwidth:23,barrier:19,base:[2,13,17,23],basic:[3,24],basin:17,becaus:[11,13,17],been:[17,19,21],befor:[17,27,28,29],begin:17,behav:17,behavior:17,being:[12,17],below:[11,21,27,28],besid:[4,17,25],better:[13,17,24],between:[5,11,13,17,19,24,27,28,29],big:11,bilinear:[13,17,19,24,28],bind:23,bipol:10,bit:28,block:[19,21],bob:19,bold:19,bool:[21,25,26,27,28],both:[0,5,17,19,23,24,27],bottom:[11,14],bound:[5,19,20,21,25],boundari:[17,27],broken:24,bug:24,build:[17,19,23,24],built:[17,19,20,23],bundl:23,cache_data:19,cache_data_fil:19,calcul:[4,5,9,13,17,19,21,24,27,28],call:[17,19,24,25,26,27,28,29],can:[1,4,5,7,11,14,17,19,20,21,23,24,25,26,27],cannot:[17,23,27],capabl:[17,23,24,26],cart:[0,5,19,25,28],cartesian:[0,5,17,19,24,25],categor:24,cax:19,cbar_ax:19,cell:[5,9,13,14,19,20,21,22,24,27,28],center:[3,11,13,14,17,19,20,21],center_vcent:[14,19,20,21],center_vfac:14,certain:17,chang:24,channel:23,characterist:17,charg:17,check:28,choic:17,choos:[1,24],chosen:17,circl:[5,22,24],climat:[17,24],clockwis:19,closest:[1,13],cmap:19,coars:13,code:[16,17,19,21,22],col:28,col_src:28,collect:[22,24],collector:28,colorbar:19,combin:[7,13,17],come:17,comm:[17,19],comm_world:[17,19],command:[23,24],common:[17,19],commonli:[17,24],commun:24,compat:17,complet:17,compliant:[20,21,27],compon:[11,23,24],compos:[17,27],comput:[17,21,22],compute_error:19,compute_mass_grid:19,concaten:[19,27],concept:25,conda:23,connect:[5,10,17,19,21,27,28],conserv:[1,4,5,9,13,17,19,21,23,24,28],conserve_2nd:[13,17],consid:[17,28],constant:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,19,22],construct:[7,11,13,17,25,27,28],constructor:[17,27],contact:[23,24],contain:[4,13,17,19,20,21,23,27,28],contigu:28,contribut:[1,19,24,28],control:[0,5,17,25,28],convent:[2,17,20,24],convers:17,convert:28,convert_to_du:[17,27],coord:[17,21,27],coord_dim:[0,21,27],coord_nam:[17,21],coord_si:[17,19,21,25,27],coord_typekind:[19,21],coordiant:19,coordin:[0,3,4,13,14,18,19,20,21,23,24,25,27],coordsi:[17,18,19,21,22,25,27],copi:[20,21,25,26,27,28,29],core:17,corner:[5,13,14,17,19,20,21,27],corner_vcent:14,corner_vfac:[14,19],correspond:[16,17,24,27,28,29],cos:19,could:[17,19],count:[17,19,21],counterclockwis:[17,27],counterpart:17,coupl:24,cover:17,creat:[2,13,20,21,22,23,24,25,26,27,28,29],create_field:19,create_locstream_16:19,create_locstream_16_parallel:19,create_locstream_spherical_16:19,create_locstream_spherical_16_parallel:19,creation:[7,21,26,27,28,29],creep:[1,28],creep_fil:1,critic:17,ctk:19,cube:[21,23,27],current:[5,13,17,20,27,28],custom:[17,23],custom_install_loc:23,darwin:23,data:[1,2,4,8,12,14,17,19,20,21,24,25,27,28,29],datadir:19,dealloc:[17,28,29],debug:[17,19,26],dec:18,decompos:21,decomposit:21,decount:21,deep:28,deep_copi:28,def:19,defin:[17,21,27],deg2rad:19,deg_rad:[17,19],degener:28,degre:[0,17,24],demonstr:[17,19],depend:[7,25],depth:17,deriv:[13,21,24,25],describ:[10,17,21,24,25,27],descript:[17,21],descriptor:[17,25],design:[17,24,26],desir:[17,19,20],dest:19,destin:[1,9,11,13,16,17,19,24,27,28,29],destroi:[17,20,21,25,27,28,29],detail:[17,23],determin:[13,19,21,24],develop:23,dict:28,dictionari:[25,28],differ:[7,11,13,14,17,19,20,21,24,27],dimens:[0,7,14,19,20,21,22,25,27],dimension:[17,19,24],dir_to_esmf:23,direct:17,directli:[21,27],directori:[17,23],disconnect:[17,19],discret:[20,21,22],discuss:17,distanc:[1,5,13,28],distant:28,distribut:[17,20],divid:9,dlats_par:19,dlons_par:19,doarea:19,document:[17,19,20,21,25,27,28,29],doe:[12,13,17,19,20,28],doesn:23,dofrac:19,doing:9,domain:[12,24],domask:[17,19],done:[1,6,9,17,23,27],down:[17,24],download:[23,24],driver:22,dst_frac_field:[19,28],dst_mask_valu:[17,19,28],dstarea:[9,28],dstfield:[19,28,29],dstfracfield:19,dstfractfield:19,dstgrid:19,dstgridcoordlat:19,dstgridcoordlon:19,dtype:[17,19,28],dual:27,due:[19,25],duplic:17,dure:[7,13,17,23,26],each:[1,7,11,13,17,19,20,21,25,27,28],earlier:28,earth:[17,24],eas:17,easiest:17,edg:[5,10,14,17,28],edge1:14,edge1_vcent:14,edge1_vfac:14,edge2:14,edge2_vcent:14,edge2_vfac:14,edu:[23,24],effici:17,effort:17,eight:15,either:[17,21,24,27],elem:17,elemconn:[17,19],elemcoord:19,element:[7,8,10,12,13,17,21,22,23,27,28],element_area:[17,27],element_conn:[17,27],element_coord:[19,27],element_count:27,element_id:[17,27],element_mask:[17,27],element_typ:[17,27],elemid:[17,19],elemtyp:[17,19],elif:[17,19],elimin:17,els:[17,19],embed:[5,17],empti:[12,27],enabl:[17,19],enclos:17,end:[17,21],engin:17,enough:11,ensur:26,entir:[9,11,17,23],entri:[16,17,20,21,27],enumer:27,environ:[17,23],equal:[17,21],equat:17,equival:[15,17],error:[13,16,19,25,28],esmf:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29],esmf_comm:20,esmf_fieldregrid:[28,29],esmf_fieldregridreleas:[28,29],esmf_fieldregridstor:28,esmf_fieldsmmstor:29,esmf_install_dir:23,esmf_logfil:[17,26],esmf_regridweightgen:24,esmf_support:[23,24],esmfgrid:2,esmfmesh:[2,19,27],esmfmkfil:23,esmp_fin:26,esmp_initi:26,esmpi:[15,17,22,24,26],esmpy_dev:23,esmpy_example_weight_fil:19,esmpymanag:26,essenti:17,etc:[17,20,21,23],even:21,everi:[12,21,23],exact:17,exampl:[13,17,19,23,25],except:[5,17,19],execut:[19,22],exist:20,exit:26,expect:[5,17],explain:17,explicit:[17,26,28,29],explicitli:26,expon:28,extens:17,extent:19,extern:23,extra:[17,19,20],extrap_dist_expon:28,extrap_method:28,extrap_num_level:[1,28],extrap_num_src_pnt:28,extrapmethod:[18,22,28],extrapol:[1,24,28],face:[7,14],fact:17,factor:28,factorindexlist:3,factorlist:3,factors_index:28,fail:19,fals:[19,21,26,27,28],fanci:17,fast:24,featur:17,feel:17,few:17,field:[4,8,12,13,17,18,22,23,24,25,27,28,29],fieldbundl:23,fig:19,figur:19,file:[2,3,6,20,21,22,23,24,26,27,28,29],fileformat:[17,18,19,21,22,27],filemod:[17,18,22],filenam:[19,20,21,27,28,29],filetyp:[19,21,27],fill:[1,11,28],finer:13,finit:17,first:[13,14,17,21,23,24,26,28],flag:[0,2,6,17,23,26,28],flat:11,float32:15,float64:[15,28],follow:[0,5,7,17,19,20,23,25,26,28,29],fontsiz:19,fontweight:19,forecast:[17,24],forg:23,form:[11,17],format:[2,19,21,22,23,24,27,28],fortran:[17,19,20,21,25,27],found:[17,23,28],four:[15,17],fracarea:9,fracfield:19,fraction:[9,19],framework:[17,24],free:27,free_memori:27,frequent:21,friendli:[20,28],from:[1,2,7,11,13,14,20,21,22,24,25,26,27,28,29],from_fil:21,full:17,fulli:24,further:17,garbag:[22,28],gather:19,gener:[21,23,24,25,28],geometri:[17,21],get:[14,19,22],get_area:[17,19,20],get_coord:[0,17,19,21,27],get_factor:28,get_item:[17,21],get_par:[17,19],get_rank:[17,19],get_weights_dict:28,getcwd:19,gfortran:23,gist_ncar:19,give:[19,24],given:[1,9,10,13,17,19,21],global:[17,19,24],gml:19,goe:[17,28,29],going:13,good:24,gov:18,gradient:[13,24],great:[5,22,24],great_circl:[5,28],greater:21,grid1:19,grid2:19,grid:[0,2,3,4,5,9,10,11,13,14,18,20,22,23,24,27,28,29],grid_create_from_coordin:19,grid_create_from_coordinates_3d:19,grid_create_from_coordinates_period:19,grid_imask:17,griditem:[17,18,19,21,22],gridlat:[17,19],gridlatcorn:17,gridlon:[17,19],gridloncorn:17,gridspec:[2,19,21,24],gridxcent:19,gridxcoord:19,gridxcorn:19,gridycent:19,gridycoord:19,gridycorn:19,gridzcent:19,gridzcorn:19,guarante:13,guid:23,half:17,hand:17,handl:[17,19,24,28,29],happen:[28,29],has:[17,19,21,24],has_corn:21,have:[13,17,19,20,21,27,28],height:25,held:17,hello:[17,22],hello_world:17,help:17,helper:22,here:[1,9,11,17,23],hex:7,hexagon:17,hexahedr:7,hexahedron:17,high:17,higher:[13,17,24,28],highli:17,hold:[8,17,19,27,28,29],hole:11,home:[17,23,24],how:[0,5,6,17,19,20,23,24,28],howev:[11,13,17,19,28],http:18,ident:17,identifi:[17,25],ids:[17,27],ignor:[16,17,19,24,28],ignore_degener:28,impli:17,importerror:19,imshow:19,inappropri:17,includ:[17,23,24,25],ind:19,index:[19,20,21,22,28],indic:[0,1,2,3,11,15,16,17,28,29],individu:[17,20,21,23,25,27],influenc:[5,17,28],info:17,inform:[17,20,21,23,24,25,26,27,28,29],initi:[12,17,20,22,23,26,28],initialize_field_grid_period:19,input:[1,13,17,27,28],insert:17,instal:[19,22],instanc:21,instead:[11,17],instruct:23,int32:[15,17,19,28],int64:15,integ:[15,17,21,27],integr:[13,17,23,24],interfac:[17,20,22,23,24],intern:[17,21,25],interpol:[5,11,13,17,18,19,24,28,29],interpret:[0,17],intervent:17,invers:1,invok:17,involv:[4,17,19],irregularli:17,is_spher:[17,21],isdir:19,isfil:19,isn:17,issu:[6,19,23,24],item:[4,17,20,21],its:[1,13,17,20],itself:10,job:17,join:19,juli:19,just:9,kei:[17,25,28],kind:[4,15,17,24],known:[17,24,27],kwarg:[20,21,25,27,28,29],lacc:18,lambda:19,land:[17,24],lanl:18,lapack:23,larg:17,large_fil:28,larger:[13,27,28],last:[18,20],lat:[17,19,21,25,27],lat_corn:[17,19],lat_par:19,latest:24,latitud:[0,17,19,21],latlon:19,latm:[17,19],latm_corn:17,layer:17,layout:[12,17],lbx:19,lby:19,lbz:19,leak:28,least:[17,20,24],len:[17,19],length:21,less:[13,17,21],level:[1,17,23,28],lib:23,librari:[15,17,23,25,27,28],lie:[5,11],lifetim:17,like:[17,19,23,24],likewis:17,limit:22,line:[5,17,24,28],line_typ:28,linear:[13,17,24],linetyp:[17,18,22,28],link:[17,22,28],linspac:17,linux:23,list:[17,19,20,21,23,25,27,28],littl:17,ll1deg_grid:19,ll2:19,local:[17,21],local_pet:[17,19,26],locat:[1,8,13,14,17,19,20,21,23,25,27],location_count:25,locstream:[18,20,22,24,28,29],locstream_util:19,log:[6,19,22,26],logfil:26,logic:[17,21,24],logkind:[17,18,22],lon:[17,19,21,25,27],lon_corn:[17,19],lon_par:19,longer:27,longitud:[0,17,19,21],lonm:[17,19],lonm_corn:17,loop:28,lot:23,low:17,lower:[17,19,20,21,25],lower_bound:[19,20,21,25],machin:[17,19,23],made:17,mai:[1,2,4,11,13,17,21,24,27,28,29],main:[13,19],maintain:17,make:[5,17,19,25,27,28],makedir:19,manag:[18,19,22,23,28,29],mani:[17,21,23,24,28],manifold:[17,27],manner:[17,19,20,21,25,27,28,29],manual:[17,23,27],map:[0,1,11,12,13,20,21,24,28],mark:17,mask:[4,19,21,22,24,25,27,28],mask_flag:27,mask_valu:19,mass:[22,28],match:13,matplotlib:19,matrix:[13,16,19,24],max:19,max_index:[19,21],maximum:21,maxproc:[17,19],mean:[17,19,20],meanrelerr:19,memori:[17,19,20,21,23,25,27,28,29],mesh:[2,7,8,9,13,18,20,22,23,24,28,29],mesh_create_5:19,mesh_create_5_parallel:19,mesh_util:19,meshelemtyp:[17,18,19,22,27],meshgrid:[17,19],meshloc:[17,18,19,20,22,27],meshnam:27,messag:[6,17,28],metadata:[17,20,27],method:[0,1,5,13,14,17,24,26,28],might:17,min:19,minimum:21,mininum:13,mismatch:[11,25],miss:21,missing_valu:21,mix:[17,25],mode:[3,17],model:[17,24],modif:19,modifi:19,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,22],monopol:[10,21],more:[1,13,17,20,21,24,25,27,28,29],most:[17,21],move:[1,27],mpas_uniform_10242_dual_counterclockwis:19,mpi4pi:[17,19,23],mpi:[22,23],mpich:[17,19],mpirun:22,mpiuni:20,much:[6,13,17],mul:19,multi:[6,17,23],multipl:[1,6,13,17,20,21,24],must:[17,19,20,23,25,27],name:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,19,20,21,22,23,25,26,27,29],nativ:17,natur:17,ndarrai:[20,27,28],ndbound:[17,19,20],nearest:[1,13,17,24],nearest_dto:[13,17,19],nearest_idavg:[1,28],nearest_stod:[1,13,17],nearli:17,necessari:[17,19],necessarili:17,need:[17,19,20,23,24,25,27],neighbor:[1,13,24],netcdf:[2,17,20,21,23,24,27,28],next:11,nice:24,nightli:23,nodal:17,node:[8,11,17,19,20,27],node_coord:[17,27],node_count:27,node_id:[17,27],node_mask:17,node_own:[17,27],nodecoord:[17,19],nodeid:[17,19],nodeown:[17,19],non:17,none:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,19,20,21,25,26,27,28,29],norm_typ:28,normal:[1,9,17,28],normtyp:[17,18,22,28],nose:[19,23],nosetest:23,note:[17,19,20,24,27,28],novemb:19,now:[11,17],npntavg:11,num_elem:[17,19],num_nod:[17,19],num_peri_dim:[17,19,21],number:[1,11,17,19,20,21,23,25,26,27,28],numer:28,numpi:[15,19,21,22,23,27,28],object:[2,12,19,20,21,22,23,24,25,26,27,28,29],observ:[17,24,25],occasion:19,occur:[10,11,21,28],ocean:17,oceans11:18,offlin:23,offset:28,onc:17,one:[1,6,13,17,19,20,21,24,28],ongo:27,onli:[3,5,13,17,19,20,21,23,26,27,28,29],onto:[11,20],openmpi:[17,19,23],oper:[12,17,19,21,24,27,28,29],oppos:12,opposit:17,option:[5,9,11,17,19,20,21,23,24,25,27,28,29],order:[0,13,19,22,24,27],origin:[12,17,24,26],other:[0,4,9,17,24,25,28],otherwis:21,out:[11,17,24,28,29],outer:19,outlin:[21,27],output:[17,19,26,28],outsid:24,over:[17,21,28],overlap:[9,13,24],overview:22,overwritten:[28,29],own:[17,27],owner:17,ownership:17,packag:[17,18,22,24],pad:17,page:[17,22,23,24],pair:17,parallel:[22,23,24],param:[19,20],paramet:[1,11,17,20,21,25,26,27,28,29],parametr:[7,17,19,27],parametric_dim:[17,19,27],parent:[17,19],part:[9,17,27],particip:17,particular:[17,23,25],particularli:13,pass:17,patch:[13,17,24],path:[5,17,19,23,24,28],per:[6,17,20],perfect:17,perform:[17,21],perimet:17,period:[21,22],periodic_dim:[17,19,21],persist:17,pet:[6,17,19,21,26],pet_count:[17,19,26],physic:[17,20,21],piec:[17,19],place:[11,17,24],plane:[5,17],platform:[23,24],pleas:[20,21,23,24,25,27,28,29],plot:19,plt:19,point:[1,5,11,13,16,17,24,25,27,28],pointer:[19,23],polar:17,pole:[10,11,21,24,28],pole_dim:[17,19,21],pole_kind:21,pole_method:28,polekind:[17,18,21,22],polemethod:[17,18,22,28],polygon:17,polynomi:[13,24],portion:[12,17],posit:[14,17,25],possibl:[13,17],post:17,postcondit:19,potenti:17,power:[1,17],precondit:19,prefix:23,present:17,preserv:[13,24],print:[17,19],prior:[17,26],probabl:[17,19],problem:[17,24],proce:28,process:[1,17,19,24],processor:[19,23,27],prod:19,produc:[9,24,28],product:21,program:[17,19,23],project:[11,24],propag:17,properli:[17,26],properti:[17,20,21,25,26,27],proport:24,provid:[1,13,17,21,24,27],purpos:13,put:17,pyplot:19,python:[17,20,21,22,23,24,25,26,27,28],pythonpath:23,quad:[7,17,19],quadrilater:[7,17],qualiti:24,quantiti:[5,17],queri:17,question:[23,24],radian:[0,17,19],radiu:[0,17,25],rais:[1,17,19,28],rang:[11,13,17,19],rank:[17,19,20,21,25,26,27],ravel:19,read:[17,20,21,22,24,28,29],real:15,receiv:[1,13,17],reciproc:1,recogn:25,recommend:17,recoveri:[13,24],rectangular:[17,21,24],reduc:[19,28],reduce_v:19,refer:[0,4,17,20,22,23,28],referenc:[17,20,21,23,25,27],regdecompptil:21,region:[17,18,19,21,22,24,27,28,29],regist:26,regress:23,regrid:[0,1,4,5,9,11,12,13,18,21,22,23,24,27,29],regrid_from_fil:23,regrid_method:[19,28],regrid_pole_npoint:28,regridfromfil:[17,18,19,22],regrididng:27,regridmethod:[17,18,19,22,28],regridpolenpnt:11,regridsrc2dst:19,regular:25,rel:[19,23],relat:[23,24],relationship:[17,20],releas:[18,20,21,24,25,27,28,29],relerr:19,remain:21,remap:[18,24],rememb:[17,28],remov:19,repeat:1,repeatedli:1,replic:20,repositori:19,repres:[4,17,20,21,24,25,27,28,29],represent:17,requir:[13,17,20,21,22,27,28,29],reshap:19,resolv:17,resourc:[21,22],respect:[16,17,28],rest:11,restrict:17,result:[13,16,17,19,24,25,26,28,29],retain:12,retriev:[14,17,19,23,26,28,29],reus:17,rh_filenam:[28,29],right:19,robust:24,root:19,routehandl:[13,28,29],routin:[15,17],row:[11,28],row_dst:28,run:[17,22,23],run_regrid:19,runtim:26,safe:[20,21,25,27,28,29],same:[17,20,21,23,27],scalabl:[17,24],scope:[28,29],scrip:[2,18,19,21,24,27],script:[17,19],search:22,second:[13,14,17,21,24,25,28],section:17,see:[17,20,21,24,25,27,28,29],seem:19,seen:17,select:[9,12,17,19,28],send:19,sendobj:19,separ:24,sequenti:21,serial:[17,22,23],set:[7,11,14,17,19,21,23,24,25,26,27,28],set_titl:19,set_xbound:19,set_xlabel:19,set_ybound:19,set_ylabel:19,setenv:23,setup:23,shallow:[20,21,25,27,28,29],shape:[5,17,19,27,28],share:[20,23],shell:23,shortcut:17,shorter:17,shortest:5,should:[1,3,6,12,17,19,27,28],show:19,shutdown:[17,19],side:[7,17,21],signific:17,similar:17,similarli:17,simpl:24,simplest:17,simpli:23,simplif:17,simplifi:17,sin:19,sinc:17,singl:[2,17,20,21,23,24,27],singleton:26,site_packag:23,size:[11,17,19,21,25,27],size_own:27,skip:28,skiptest:19,slats_par:19,slice:22,slightli:[17,19],slons_par:19,small:[17,23,27],smaller:[17,27],smooth:17,smoother:[13,24],snippet:19,so_omon_giss:19,softwar:[18,24],solut:[17,19],some:[4,11,17,21,23],sourc:[1,9,11,13,17,19,22,24,27,28,29],space:[5,17,21,24,27],spars:[16,24],spatial:[19,22,27],spatial_dim:[17,19,27],spawn:22,special:17,specif:[2,17,23,27],specifi:[1,3,5,6,12,13,14,17,19,20,21,23,25,27,28,29],sph_deg:[0,17,19,21,25,27],sph_rad:[0,17,19,25],sphere:[5,11,17,21,23,24,27,28],spheric:[0,18,21,24],squar:[17,24,27],src:23,src_frac_field:[19,28],src_mask_valu:[17,19,28],srcfield:[19,28,29],srcfracfield:19,srcgrid:19,srcgridcoordlat:19,srcgridcoordlon:19,stage:24,stagger:[13,14,19,20,21],staggerloc:[17,18,19,20,21,22],stand:19,standard:[17,23,25],start:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19],start_work:19,statu:24,stencil:13,step:[17,21,27],still:[11,17],store:[17,20,21,25,28],str:[17,20,21,25,27],straight:[5,17,24],strategi:17,stream:[24,25],stress:23,string:[19,27,28,29],structur:[2,17,24],style:19,subplots_adjust:19,subprocess:19,subsequ:26,subset:23,succe:23,success:17,successfulli:19,suffici:[17,21],suitabl:24,sum:[1,13,19,21,27],support:[1,17,20,21,23,24,27,28],suptitl:19,sure:19,surfac:[5,17,27,28],surround:[11,13],symmetr:17,syntax:25,sys:[17,19],system:[0,17,19,21,24,25,27],tabl:17,take:[13,16,17,23,24,28],target:[17,23],task:17,techniqu:17,teeth:11,tell:[14,19,21,27],temperatur:20,tempor:17,term:[17,27],test:23,test_api:23,test_exampl:23,test_examples_parallel:23,test_field_regrid:23,test_parallel:23,test_regrid:23,test_regrid_from_fil:23,test_regrid_from_file_dryrun:23,test_regrid_from_file_parallel:23,testregrid:23,tetra:7,tetrahedr:7,tetrahedra:17,tetrahedron:17,than:[1,13,17,21,24,27,28],thei:[1,17,25],them:[17,19,23],therefor:[17,21],thi:[0,1,2,4,5,6,9,10,11,12,13,15,16,17,19,20,21,23,24,25,26,27,28,29],thin:17,thing:17,third:17,those:[17,20,21,25,27,28],though:28,thought:[17,25],thread:17,three:17,through:[5,17,21,23,24],thu:[13,17],tight:28,tile:[2,21,23,24],tiles:21,time:[17,20,23,26,27],timeslic:[19,20],todo:19,togeth:17,toler:19,top:[11,14,17,23],topolog:[17,21,27],total:[12,17,21,26,28,29],trac:18,transform:24,translat:17,transpar:17,treat:[13,28],tri:[7,17,19],triangl:[11,17],triangular:7,trigger:17,tupe:28,tupl:[20,27,28],turn:[5,28],tutori:[17,22],two:[5,17,19,21,24,27,28,29],type:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,25,27,28],typekind:[17,18,19,20,21,22],typic:13,ubi:19,ubx:19,ubz:19,ucar:[23,24],ugrid:[2,24,27],uncom:19,unconnect:24,underli:[15,17,20,21,25,27,28,29],underneath:24,ungrid:20,uniform:19,uniniti:17,uninitv:19,uniqu:17,unit:17,unittest:19,unmap:[1,16,17,24,28],unmapped_act:[19,28],unmappedact:[17,18,19,22,28],unmask:17,unstructur:[2,17,19,24,27],until:17,unus:17,updat:17,upon:[17,20],upper:[19,20,21,25],upper_bound:[19,20,21,25],usag:[17,19],use:[1,3,12,13,17,19,21,23,27,28],used:[4,6,7,8,9,15,16,17,19,20,21,24,25,27,28,29],useful:[0,11,17,24],user:[0,1,9,17,20,21,23,26,28],uses:[17,19,24],using:[0,1,11,17,19,20,21,23,24,25,26,28],util:[17,19,24],valid:[7,17,22,25],valu:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,23,24,25,27,28,29],valueerror:[17,19],valuefield:19,vari:17,variabl:[17,19,20,21,23,27,28],variant:24,varieti:[17,24],variou:[12,17,24],varnam:[17,21,27],vector:11,veri:17,versa:24,version:[13,23,24,28],vertex:[17,20,27],vertic:[5,14],via:[1,28],vice:24,virtual:17,visual:24,vmax:19,vmin:19,vtk:2,wai:[17,21,27],wave:19,weather:24,weight:[1,3,5,9,13,17,22,24,28,29],welcom:22,well:17,were:17,what:16,when:[1,3,5,9,13,14,17,20,23,24,26,28,29],where:[14,17,19,21,28],wherebi:17,whether:[17,19,21,26,27],which:[1,3,5,7,9,11,13,17,19,20,21,24,26,27,28,29],whole:17,whose:17,wide:24,withaux:3,within:[13,17,25],without:[17,19,20,23,28],won:[11,17],word:[9,17],work:[13,17,19,23],worker:[17,19],world:[17,22,25],would:[5,17,27],wrap:23,wrapper:[17,20,21,25,27],write:[3,22],written:[3,23],x_par:19,xcoord:19,xcoordin:19,xcorner:19,xctfield:19,y_par:19,ycoord:19,ycoordin:19,ycorner:19,yield:13,z_par:19,zcoord:19,zcoordin:19,zcorner:19,zero:[11,17,19,28,29],zero_region:[17,19,28,29]},titles:["CoordSys","ExtrapMethod","FileFormat","FileMode","GridItem","LineType","LogKind","MeshElemType","MeshLoc","NormType","PoleKind","PoleMethod","Region","RegridMethod","StaggerLoc","TypeKind","UnmappedAction","API","Appendices","Tutorials","Field","Grid","Table of Contents","Installation","Overview","LocStream","Manager","Mesh","Regrid","RegridFromFile"],titleterms:{"class":[17,18],"function":19,"import":[23,24],Using:19,alloc:17,anaconda:23,analyt:19,api:[17,18],appendic:18,area:17,cell:17,circl:17,code:23,collect:17,comput:19,constant:[17,18],content:22,coordin:17,coordsi:0,creat:[17,19],creation:17,dimens:17,discret:17,driver:19,element:19,esmfmesh:17,esmpi:[19,23],execut:17,extrapmethod:1,field:[19,20],file:[17,19],fileformat:2,filemod:3,format:17,from:[17,19,23],garbag:17,gener:17,get:23,great:17,grid:[17,19,21],griditem:4,gridspec:17,hello:19,helper:19,index:17,initi:19,instal:23,limit:23,linetyp:5,link:24,locstream:[17,19,25],log:17,logkind:6,manag:[17,26],mask:17,mass:19,mesh:[17,19,27],meshelemtyp:7,meshloc:8,mpi:[17,19],mpirun:17,name:[17,18],normtyp:9,numpi:17,object:17,order:17,overview:24,packag:23,parallel:[17,19],period:[17,19],pole:17,polekind:10,polemethod:11,python:19,read:19,refer:18,region:12,regrid:[17,19,28],regridfromfil:29,regridmethod:13,requir:23,resourc:17,run:19,scrip:17,serial:19,slice:17,sourc:23,spatial:17,spawn:[17,19],spheric:17,stagger:17,staggerloc:14,tabl:22,tutori:19,typekind:15,ugrid:17,unmappedact:16,valid:23,weight:19,world:19,write:19}})