const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/gbx-core-BFXZg23R.js","assets/vendor-jszip-BYe2ePyN.js","assets/vendor-react-De6m-59M.js","assets/gbx-genre-Cj--zHB4.js","assets/gbx-leaf-BTFoCMKl.js","assets/vendor-i18n-C6Swx7Te.js","assets/vendor-peerjs-D87NJuwF.js","assets/vendor-misc-BB715a8a.js","assets/locales-Hy9xFCdy.js"])))=>i.map(i=>d[i]);
import{a as Zt,p as Bt,b as Et,r as I,j as e}from"./vendor-react-De6m-59M.js";import{v as xe,F as Le}from"./vendor-misc-BB715a8a.js";import{fc as $t,fd as Tt,b as J,fe as Ft,i as X,ff as qt,_ as Dt,fg as Ot,fh as Gt,fi as Kt,fj as Wt,B as _a,fk as Pa,fl as Aa,fm as Ht,fn as ka,fo as Vt,G as Ut,j as Jt,eI as Yt,e_ as Xt,f0 as Qt,fp as es,fq as as,fr as va,fs as wa,ft as ja}from"./gbx-core-BFXZg23R.js";import{m as ts,A as ss,a as rs,C as os,i as ns,r as Ia,e as is}from"./index-ia9KJEXU.js";import{s as l,o as m,n as h,b as H,a as g,l as T,_ as M,Z as P,r as Y,u as ye,c as Ma,d as La,e as V}from"./vendor-zod-ZsnOz519.js";import{loadCachedPackZipBuffer as Za,cachePackZipBuffer as cs}from"./assetBlobCache-CYvzXMoN.js";import{u as oe}from"./vendor-i18n-C6Swx7Te.js";import{X as ls,k as te,z as pe,al as ds,A as Ba,ax as ps,ay as Ea,as as Fe,$ as Ge,a0 as ke,a1 as $a,ac as Ta,ad as Fa,o as qe,m as _e,av as ms,q as us,D as de,d as gs,M as bs,az as hs,B as Ze,aA as Be,Y as fs}from"./vendor-icons-CGdkKwnk.js";import"./vendor-jszip-BYe2ePyN.js";import"./gbx-genre-Cj--zHB4.js";import"./gbx-leaf-BTFoCMKl.js";import"./vendor-peerjs-D87NJuwF.js";import"./locales-Hy9xFCdy.js";function xs(a,s){const n=s.issues.map(r=>`  - ${r.path.length?r.path.map(String).join("."):"(root)"}: ${r.message}`);throw new Error(`[${a}] JSON schema validation failed:
${n.join(`
`)}`)}function qa(a,s,n){const r=a.safeParse(s);return r.success||xs(n,r.error),r.data}const u=l().min(1),Da=m({resourceKey:u,amount:h().optional(),amountFormula:l().optional(),whenFormula:l().optional()}),ys=m({effectType:T("dice_formula_override"),fromDiceNotation:l().optional(),toDiceNotation:u,specialResolution:l().optional(),resourceCosts:g(Da).optional(),allowDuplicateSelection:H().optional(),maxQueueCount:h().int().nonnegative().optional()}),Oa=m({targetStat:u,formula:u}),_s=m({id:u,name:u,category:M(["weapon","armor","shield","accessory","item"]),equipSlot:l().optional(),price:h().optional(),description:l(),passiveEffects:g(Oa).optional(),rollBuilderEffect:ys.optional()}),ks=m({calculate:u,applyTarget:u,operator:M(["+","-","="])}),vs=m({rollTitle:u,targetValue:h().nullable().optional(),description:l().optional(),trigger:M(["on_enter","on_turn_start_stay"]).optional(),packageId:l().optional(),procedureId:u.optional()}),Ga=M(["actor","gm","requester"]),ws=m({type:T("hp_damage"),value:h().finite().optional(),dice:u.optional(),roller:Ga.optional()}).superRefine((a,s)=>{const n=a.value!==void 0,r=!!a.dice;n===r&&s.addIssue({code:P.custom,message:"hp_damage requires exactly one of value or dice"}),r&&!a.roller&&s.addIssue({code:P.custom,message:"hp_damage with dice requires roller",path:["roller"]}),n&&a.roller&&s.addIssue({code:P.custom,message:"hp_damage with value must not set roller",path:["roller"]})}),Ee=m({effects:g(ws).min(1)}),js=m({id:u,trigger:m({adapter:M(["env","interact","request","dual"]),when:M(["on_enter","on_turn_start_stay"]).optional(),object:M(["door","inspect"]).optional()}).optional(),actor:m({packageId:u,roller:Ga.optional()}),opposed:m({resolve:M(["vs_tn","contested_roll","none"]),targetValue:h().finite().nullable().optional(),packageId:u.optional()}),substitutions:m({allow:M(["owned_packages","none"]),suggestFromTraits:H().optional()}).optional(),onSuccess:Ee.optional(),onFailure:Ee.optional(),onHit:Ee.optional()}).superRefine((a,s)=>{var n,r,i;((n=a.trigger)==null?void 0:n.adapter)==="env"&&!a.trigger.when&&s.addIssue({code:P.custom,message:"env trigger requires when",path:["trigger","when"]}),((r=a.trigger)==null?void 0:r.adapter)==="interact"&&!a.trigger.object&&s.addIssue({code:P.custom,message:"interact trigger requires object",path:["trigger","object"]}),a.opposed.resolve==="contested_roll"&&!a.opposed.packageId&&s.addIssue({code:P.custom,message:"contested_roll requires opposed.packageId",path:["opposed","packageId"]}),((i=a.trigger)==null?void 0:i.adapter)==="dual"&&a.opposed.resolve!=="contested_roll"&&s.addIssue({code:P.custom,message:"dual trigger requires contested_roll",path:["opposed","resolve"]})}),Is=m({id:u,title:u,body:l(),visibleTo:M(["all","GM"]).optional()}),Ns=m({title:l().optional(),sections:g(Is).min(1)}),Ss=M(["card_effect","revolution","bind","finish"]),Rs=m({id:u,group:Ss,labelKey:u}),Cs=m({id:u,labelKey:u,ruleIds:g(u).min(1)}),zs=m({rules:g(Rs).min(1),presets:g(Cs).optional()}).superRefine((a,s)=>{const n=new Set;for(const r of a.rules)n.has(r.id)&&s.addIssue({code:P.custom,message:`houseRuleCatalog.rules id "${r.id}" is duplicated`,path:["rules"]}),n.add(r.id);for(const r of a.presets??[])for(const i of r.ruleIds)n.has(i)||s.addIssue({code:P.custom,message:`preset "${r.id}" references unknown ruleId "${i}"`,path:["presets"]})}),Ps=m({id:u,type:T("matrix_substitution"),name:l().optional(),diceNotation:l().optional(),matrix:Y(l(),h()),critThreshold:h().optional()}),As=m({default:g(u).optional(),byRollMode:Y(u,g(u)).optional()}),Ms=M(["critical","fumble","success","mixed","fail","normal"]),Ls=m({id:u,min:l().optional(),max:l().optional(),mapsTo:Ms}),Zs=m({randomizer:m({type:M(["dice","cards"]),notation:l()}),mechanic:m({type:M(["roll_over","roll_under","dice_pool"]),criticalValue:l().optional(),fumbleValue:l().optional(),defaultTargetValue:h().finite().optional(),outcomeBands:g(Ls).min(1).optional()}),contested:m({tieBreaker:M(["active_wins","passive_wins","re_roll"]),compareBy:M(["total","margin_of_success"])}),onRollResolved:As.optional()}),Bs=m({id:u,name:u,baseFormula:u}),Es=m({type:M(["auto","point_buy","experience"]),cost:h().optional(),prerequisites:g(l()).optional()}),$s=m({isStackable:H(),maxLevel:h().int().nonnegative().optional()}),Ts=m({costMpFormula:l().optional(),costHpFormula:l().optional(),limit:h().int().nonnegative().optional(),resetTiming:M(["turn","combat","scenario","day"]).optional()}),Fs=m({id:u,name:u,category:u.max(64),description:l(),acquisition:Es,stackable:$s,usage:Ts,passiveEffects:g(Oa).optional()}),qs=m({targetStat:u,formula:u}),Ka=M(Tt),$e=m({detach:H().optional(),chain:l().optional(),applyFormula:m({targetStat:u,formula:u}).optional(),applyTemporaryModifier:m({target:u,formula:u}).optional(),applyActionBlock:m({scope:M(["thisTurn","thisRound"])}).optional()}),Ds=m({id:u,phase:Ka,kind:M(["resistance","damage"]),titleKey:u,targetValue:h().nullable().optional(),defaultDice:l().optional(),onSuccess:$e.optional(),onFailure:$e.optional(),onResolve:$e.optional()}),Os=m({id:u,name:u,type:M(["buff","debuff","system"]),durationLimit:M(["turn","combat","scenario"]).optional(),lifecycle:m({applyOn:g(Ka).min(1).optional(),durationDecrement:M(["afterResolve","onPhase","never"]).optional(),rollTriggers:g(Ds).optional()}).optional(),description:l(),effects:g(qs),rollBuilderResourceCosts:g(Da).optional()}),Gs=m({id:l(),name:l(),type:M(["number","string","boolean"]),defaultValue:ye([h(),l(),H()])}),Ks=m({coreMetrics:m({hp:m({current:l(),max:l(),temp:l().optional()}).optional(),mp:m({current:l(),max:l()}).optional(),initiative:l().optional()}),baseStats:g(Gs),derivedVariables:Y(l(),l()),uiGroups:g(V())}),Ws=m({id:l().min(1),name:l(),version:l(),author:l(),description:l()}),Hs=m({rollMin:h(),rollMax:h(),power:h(),triggersPowerCrit:H().optional()}).superRefine((a,s)=>{a.rollMin>a.rollMax&&s.addIssue({code:P.custom,message:"rollMin must be <= rollMax",path:["rollMin"]})}),Vs=m({id:l(),name:l(),diceNotation:l(),critThreshold:h().optional(),rows:g(Hs)}),Us=m({role:ye([M(["GM","PL","LIBRARY"]),Ma()]).optional(),ownerRole:l().optional(),type:l().optional(),status:l().optional(),color:l().optional(),images:g(l()).optional(),activeImageIndex:h().optional(),stats:Y(l(),h()).optional(),items:g(V()).optional(),traits:g(V()).optional(),conditions:g(V()).optional(),equipments:g(V()).optional(),customActions:g(V()).optional(),memo:l().optional()}).passthrough(),Js=m({statPool:m({points:h().int().nonnegative(),assignableStatIds:g(u).min(1),minPerStat:h().int(),maxPerStat:h().int()}),traitBudget:m({points:h().int().nonnegative()}),defaultPackageIds:g(u),selectablePackageIds:g(u),startingEquipmentIds:g(u).optional(),selectableEquipmentIds:g(u).optional()}),Ys=M(["draw","discard","hand","play","custom"]),Xs=m({id:u,name:u,cards:g(u).min(1)}),Qs=m({id:u,kind:Ys,owner:M(["shared","per_actor"]).optional()}),er=m({id:u,name:u,deckId:u,zones:g(Qs).min(1)}),ar=m({decks:g(Xs).min(1),tables:g(er).min(1)}).superRefine((a,s)=>{const n=new Set(a.decks.map(r=>r.id));a.tables.forEach((r,i)=>{n.has(r.deckId)||s.addIssue({code:P.custom,message:`table deckId "${r.deckId}" is not in cardCatalog.decks`,path:["tables",i,"deckId"]})})}),tr=m({dx:h().int().min(-1).max(1),dy:h().int().min(-1).max(1)}).refine(a=>!(a.dx===0&&a.dy===0),{message:"direction (0,0) is not allowed"}),sr=m({id:u,opponentId:u}),rr=m({x:h().int().min(0).max(31),y:h().int().min(0).max(31),sideId:u}),or=m({kind:T("line_flip"),width:h().int().min(4).max(32),height:h().int().min(4).max(32),empty:l(),sides:g(sr).min(2),directions:g(tr).min(1),initialCells:g(rr).optional()}).superRefine((a,s)=>{var r;const n=new Set(a.sides.map(i=>i.id));n.size!==a.sides.length&&s.addIssue({code:P.custom,message:"boardMechanics.lineFlip.sides ids must be unique",path:["sides"]}),a.sides.forEach((i,t)=>{n.has(i.opponentId)||s.addIssue({code:P.custom,message:`opponentId "${i.opponentId}" is not in sides`,path:["sides",t,"opponentId"]}),i.opponentId===i.id&&s.addIssue({code:P.custom,message:"opponentId must differ from side id",path:["sides",t,"opponentId"]})}),(r=a.initialCells)==null||r.forEach((i,t)=>{(i.x>=a.width||i.y>=a.height)&&s.addIssue({code:P.custom,message:"initialCells coord out of bounds",path:["initialCells",t]}),n.has(i.sideId)||s.addIssue({code:P.custom,message:`initialCells sideId "${i.sideId}" is not in sides`,path:["initialCells",t,"sideId"]})})}),nr=m({dq:h().int().min(-2).max(2),dr:h().int().min(-2).max(2)}).refine(a=>!(a.dq===0&&a.dr===0),{message:"hex direction (0,0) is not allowed"}),ir=m({kind:T("hex_grid"),orientation:M(["pointy","flat"]),directions:g(nr).min(1).optional(),qMin:h().int().min(-32).max(32),qMax:h().int().min(-32).max(32),rMin:h().int().min(-32).max(32),rMax:h().int().min(-32).max(32)}).superRefine((a,s)=>{a.qMin>a.qMax&&s.addIssue({code:P.custom,message:"qMin must be <= qMax",path:["qMin"]}),a.rMin>a.rMax&&s.addIssue({code:P.custom,message:"rMin must be <= rMax",path:["rMin"]})}),cr=m({id:u,capacity:h().int().min(1).max(8).optional()}),lr=m({kind:T("worker_placement"),spaces:g(cr).min(1).max(64)}).superRefine((a,s)=>{new Set(a.spaces.map(r=>r.id)).size!==a.spaces.length&&s.addIssue({code:P.custom,message:"boardMechanics.workerPlacement.spaces ids must be unique",path:["spaces"]})}),dr=La("kind",[m({kind:T("deal_damage"),amount:h().int().min(1).max(20),target:M(["opponent","self"])}),m({kind:T("gain_life"),amount:h().int().min(1).max(20)})]),pr=m({id:u,kind:M(["land","creature","spell"]),cost:h().int().min(0).max(8),power:h().int().min(0).max(20).optional(),toughness:h().int().min(1).max(20).optional(),effects:g(dr).max(4).optional()}).superRefine((a,s)=>{a.kind==="land"&&a.cost!==0&&s.addIssue({code:P.custom,message:"land cost must be 0",path:["cost"]}),a.kind==="creature"&&(a.power===void 0||a.toughness===void 0)&&s.addIssue({code:P.custom,message:"creature requires power and toughness",path:["power"]}),a.kind==="spell"&&(!a.effects||a.effects.length<1)&&s.addIssue({code:P.custom,message:"spell requires at least one enumerated effect",path:["effects"]})}),mr=m({kind:T("battlefield"),startingLife:h().int().min(1).max(30),openingHand:h().int().min(1).max(7),maxLandsPerTurn:h().int().min(1).max(3),cards:g(pr).min(1).max(32),deck:g(u).min(4).max(40)}).superRefine((a,s)=>{const n=new Set(a.cards.map(r=>r.id));n.size!==a.cards.length&&s.addIssue({code:P.custom,message:"boardMechanics.battlefield.cards ids must be unique",path:["cards"]}),a.deck.forEach((r,i)=>{n.has(r)||s.addIssue({code:P.custom,message:`deck card id "${r}" is not in cards`,path:["deck",i]})})}),ur=La("kind",[m({kind:T("step"),dx:h().int().min(-2).max(2),dy:h().int().min(-2).max(2)}).refine(a=>a.dx!==0||a.dy!==0,{message:"step dx,dy cannot both be 0"}),m({kind:T("leap"),dx:h().int().min(-2).max(2),dy:h().int().min(-2).max(2)}).refine(a=>a.dx!==0||a.dy!==0,{message:"leap dx,dy cannot both be 0"}),m({kind:T("ray"),dx:h().int().min(-1).max(1),dy:h().int().min(-1).max(1)}).refine(a=>a.dx!==0||a.dy!==0,{message:"ray dx,dy cannot both be 0"})]),gr=m({id:u,kind:T("once_extra_step"),dx:h().int().min(-2).max(2),dy:h().int().min(-2).max(2)}).refine(a=>a.dx!==0||a.dy!==0,{message:"once_extra_step dx,dy cannot both be 0"}),br=m({id:u,royal:H().optional(),moves:g(ur).min(1).max(16),modifiers:g(gr).max(4).optional()}),hr=m({typeId:u,owner:M(["GM","PL"]),x:h().int().min(0).max(8),y:h().int().min(0).max(8)}),fr=m({kind:T("piece_grid"),width:T(9),height:T(9),pieceTypes:g(br).min(1).max(16),initialPieces:g(hr).min(2).max(40)}).superRefine((a,s)=>{const n=new Set(a.pieceTypes.map(t=>t.id));n.size!==a.pieceTypes.length&&s.addIssue({code:P.custom,message:"boardMechanics.pieceGrid.pieceTypes ids must be unique",path:["pieceTypes"]});const r=new Set,i={GM:!1,PL:!1};a.initialPieces.forEach((t,d)=>{n.has(t.typeId)||s.addIssue({code:P.custom,message:`initialPieces typeId "${t.typeId}" is not in pieceTypes`,path:["initialPieces",d,"typeId"]});const b=`${t.x},${t.y}`;r.has(b)&&s.addIssue({code:P.custom,message:"initialPieces cells must be unique",path:["initialPieces",d]}),r.add(b);const _=a.pieceTypes.find(z=>z.id===t.typeId);_!=null&&_.royal&&(i[t.owner]=!0)}),(!i.GM||!i.PL)&&s.addIssue({code:P.custom,message:"each owner must have at least one royal piece",path:["initialPieces"]})}),xr=m({kind:T("shedding"),seatMin:T(3),seatMax:T(4),ranks:g(u).min(3).max(13),suits:g(u).min(2).max(4),deck:g(u).min(12).max(54)}).superRefine((a,s)=>{new Set(a.ranks).size!==a.ranks.length&&s.addIssue({code:P.custom,message:"boardMechanics.shedding.ranks must be unique",path:["ranks"]}),new Set(a.suits).size!==a.suits.length&&s.addIssue({code:P.custom,message:"boardMechanics.shedding.suits must be unique",path:["suits"]}),new Set(a.deck).size!==a.deck.length&&s.addIssue({code:P.custom,message:"boardMechanics.shedding.deck ids must be unique",path:["deck"]});const n=new Set(a.ranks),r=new Set(a.suits);a.deck.forEach((i,t)=>{const d=i.indexOf("_");if(d<=0||d===i.length-1){s.addIssue({code:P.custom,message:`deck id "${i}" must be {suit}_{rank}`,path:["deck",t]});return}const b=i.slice(0,d),_=i.slice(d+1);(!r.has(b)||!n.has(_))&&s.addIssue({code:P.custom,message:`deck id "${i}" suit/rank is not in suits/ranks`,path:["deck",t]})})}),yr=m({lineFlip:or.optional(),hexGrid:ir.optional(),workerPlacement:lr.optional(),battlefield:mr.optional(),pieceGrid:fr.optional(),shedding:xr.optional()}).refine(a=>a.lineFlip!=null||a.hexGrid!=null||a.workerPlacement!=null||a.battlefield!=null||a.pieceGrid!=null||a.shedding!=null,{message:"boardMechanics must declare at least one mechanic (lineFlip, hexGrid, workerPlacement, battlefield, pieceGrid, or shedding)"}),Wa=m({manifest:Ws,resolution:Zs,packages:g(Bs),traits:g(Fs),schema:Ks,conditions:g(Os),equipments:g(_s),effectRules:Y(u,ks),capabilities:g(l()).optional(),powerTableResolverId:l().optional(),powerWeaponTables:Y(l(),Vs).optional(),resolutionMatrices:Y(u,Ps).optional(),variables:Y(l(),l()).optional(),scenarioCastPresets:Y(l(),Us).optional(),boardHazardRules:Y(u,vs).optional(),checkProcedures:g(js).optional(),ruleCheatSheet:Ns.optional(),cardCatalog:ar.optional(),houseRuleCatalog:zs.optional(),boardMechanics:yr.optional(),characterCreation:Js.optional(),regulation:m({ownership:m({maxControllableActorsPerPeer:h().int().min(1).optional(),exclusiveActorClaim:H().optional(),allowGmOwnershipTransfer:H().optional()}).optional()}).optional()});m({format:T("glassbox-pack"),version:h().int(),systemId:l().min(1),displayName:l().optional(),rules:l().min(1),scenario:l().min(1),supplements:g(l().min(1)).optional(),houseRules:g(l().min(1)).optional(),bundledDev:m({kind:l(),description:l().optional()}).optional()}).passthrough().superRefine((a,s)=>{a.version!==1&&s.addIssue({code:P.custom,message:"Only manifest version 1 is supported",path:["version"]})});Wa.passthrough().superRefine((a,s)=>{var Z;const n=a.powerWeaponTables;n&&Object.keys(n).length>0&&((Z=a.powerTableResolverId)!=null&&Z.trim()||s.addIssue({code:P.custom,message:"powerTableResolverId is required when powerWeaponTables is non-empty",path:["powerTableResolverId"]}));const r=new Set(a.packages.map(j=>j.id)),i=(j,C)=>{r.has(j)||s.addIssue({code:P.custom,message:`unknown package id "${j}"`,path:C})},t=new Set;if((a.checkProcedures??[]).forEach((j,C)=>{t.has(j.id)&&s.addIssue({code:P.custom,message:`checkProcedures id "${j.id}" is duplicated`,path:["checkProcedures",C,"id"]}),t.add(j.id),i(j.actor.packageId,["checkProcedures",C,"actor","packageId"]),j.opposed.packageId&&i(j.opposed.packageId,["checkProcedures",C,"opposed","packageId"])}),a.boardHazardRules)for(const[j,C]of Object.entries(a.boardHazardRules))C.packageId&&i(C.packageId,["boardHazardRules",j,"packageId"]),C.procedureId&&!t.has(C.procedureId)&&s.addIssue({code:P.custom,message:`unknown procedureId "${C.procedureId}"`,path:["boardHazardRules",j,"procedureId"]});const d=a.characterCreation;if(!d)return;d.statPool.minPerStat>d.statPool.maxPerStat&&s.addIssue({code:P.custom,message:"statPool.minPerStat must be <= maxPerStat",path:["characterCreation","statPool","minPerStat"]});const b=new Set(a.schema.baseStats.map(j=>j.id));d.statPool.assignableStatIds.forEach((j,C)=>{b.has(j)||s.addIssue({code:P.custom,message:`assignableStatId "${j}" is not in schema.baseStats`,path:["characterCreation","statPool","assignableStatIds",C]})}),d.defaultPackageIds.forEach((j,C)=>i(j,["characterCreation","defaultPackageIds",C])),d.selectablePackageIds.forEach((j,C)=>i(j,["characterCreation","selectablePackageIds",C]));const _=new Set(a.equipments.map(j=>j.id)),z=(j,C)=>{_.has(j)||s.addIssue({code:P.custom,message:`unknown equipment id "${j}"`,path:C})};(d.startingEquipmentIds??[]).forEach((j,C)=>z(j,["characterCreation","startingEquipmentIds",C])),(d.selectableEquipmentIds??[]).forEach((j,C)=>z(j,["characterCreation","selectableEquipmentIds",C]))});const Ha=Wa.partial().extend({layerDependencies:g(l().min(1)).optional()}).passthrough(),_r=m({x:h(),y:h(),boardX:h(),boardY:h()}),kr=m({id:u,name:u,role:ye([M(["GM","PL","LIBRARY"]),Ma()]).optional(),ownerRole:l().optional(),type:l().optional(),status:l().optional(),color:l().optional(),images:g(ye([l(),V()])).optional(),activeImageIndex:h().optional(),location:_r,stats:Y(l(),h()).optional(),castPresetId:l().optional(),items:g(V()).optional(),memo:l().optional(),initiative:h().optional(),hasActed:H().optional(),traits:g(V()).optional(),conditions:g(V()).optional(),equipments:g(V()).optional(),customActions:g(V()).optional()}).passthrough(),vr=m({id:u,textKey:l().optional(),body:l().optional()}).superRefine((a,s)=>{var n,r;!((n=a.textKey)!=null&&n.trim())&&!((r=a.body)!=null&&r.trim())&&s.addIssue({code:"custom",message:"narrationBeat requires textKey or body",path:["textKey"]})}),wr=m({id:u,titleKey:l().optional(),title:l().optional(),bodyKey:l().optional(),body:l().optional(),sceneId:l().optional(),mapNodeId:l().optional()}).superRefine((a,s)=>{var n,r,i,t;!((n=a.titleKey)!=null&&n.trim())&&!((r=a.title)!=null&&r.trim())&&s.addIssue({code:"custom",message:"handout requires titleKey or title",path:["titleKey"]}),!((i=a.bodyKey)!=null&&i.trim())&&!((t=a.body)!=null&&t.trim())&&s.addIssue({code:"custom",message:"handout requires bodyKey or body",path:["bodyKey"]})}),jr=m({id:u,x:h(),y:h(),type:M(["wall","trap","door"]),isVisible:H(),rollTitle:l().optional(),targetValue:h().nullable().optional(),description:l().optional(),checkSkillLabel:l().optional(),ruleRef:l().optional()}),Ir=m({id:u,cells:g(m({x:h(),y:h()})).min(1),rollTitle:l(),targetValue:h().nullable(),description:l(),trigger:M(["on_enter","on_turn_start_stay"]),isVisible:H().optional(),ruleRef:l().optional()}),Nr=m({id:u,gimmicks:g(jr).optional(),hazards:g(Ir).optional()}),Sr=m({id:u,name:u,type:M(["THEATER","BOARD"]),imageUrl:l().optional(),imageAssetRef:l().optional(),bgmAssetRef:l().optional(),ambientAssetRef:l().optional(),boardMapId:l().optional(),weather:M(["clear","rain","fog","light"]).optional(),description:l().optional(),narrationBeats:g(vr).optional(),initialPlacement:g(m({castId:l(),x:h(),y:h()})).optional()}).passthrough().superRefine((a,s)=>{var n,r;!((n=a.imageUrl)!=null&&n.trim())&&!((r=a.imageAssetRef)!=null&&r.trim())&&s.addIssue({code:"custom",message:"scene requires imageUrl or imageAssetRef",path:["imageAssetRef"]}),a.imageUrl&&$t(a.imageUrl)&&s.addIssue({code:"custom",message:"pack-relative imageUrl is not allowed; use gbx://assets/{module_id}/{asset_id}",path:["imageUrl"]})}),Rr=m({id:u,name:l().optional(),nameKey:l().optional(),quantity:h().optional(),memo:l().optional(),grantOnTrapSuccess:l().optional(),sceneId:l().optional(),mapNodeId:l().optional()}).superRefine((a,s)=>{var n,r;!((n=a.nameKey)!=null&&n.trim())&&!((r=a.name)!=null&&r.trim())&&s.addIssue({code:"custom",message:"scenarioLoot entry requires nameKey or name",path:["name"]})}),Cr=m({id:u,label:u,x:h(),y:h(),sceneId:l().optional(),boardMapId:l().optional(),handoutIds:g(l()).optional(),lootIds:g(l()).optional(),hiddenUntilVisit:H().optional()}),zr=m({id:u,fromId:u,toId:u,cost:h()}),Pr=m({id:u,name:u,scale:M(["region","local"]),backgroundImageUrl:l().optional(),nodes:g(Cr),edges:g(zr),partyNodeId:l().nullable().optional(),fogTravel:H().optional()}),Ar=m({id:u,title:u,summary:u,system:u,ruleOverrides:Ha.optional(),boardMapTemplates:g(Nr).optional(),scenes:g(Sr).min(1),npcs:g(kr),handouts:g(wr).optional(),handoutAudienceMode:M(["private","holders_visible"]).optional(),scenarioLoot:g(Rr).optional(),explorationMaps:g(Pr).optional()}).passthrough();function Mr(a,s){return qa(Ha,a,s)}function Lr(a,s){return qa(Ar,a,s)}function Na(a){return{title:a.title,summary:a.summary,scenes:a.scenes.map(s=>({id:s.id,name:s.name,type:s.type,imageUrl:s.imageUrl??"",imageAssetRef:s.imageAssetRef??"",bgmAssetRef:s.bgmAssetRef??"",ambientAssetRef:s.ambientAssetRef??"",boardMapId:s.boardMapId??"",description:s.description??"",weather:s.weather??"clear",beatBodies:(s.narrationBeats??[]).map(n=>n.body??n.textKey??"")})),handouts:(a.handouts??[]).map(s=>({id:s.id,title:s.title??s.titleKey??"",body:s.body??s.bodyKey??"",sceneId:s.sceneId??"",mapNodeId:s.mapNodeId??""})),npcs:a.npcs.map(s=>{var n,r,i,t;return{id:s.id,name:s.name,memo:typeof s.memo=="string"?s.memo:"",castPresetId:s.castPresetId??"",x:((n=s.location)==null?void 0:n.x)??0,y:((r=s.location)==null?void 0:r.y)??0,boardX:((i=s.location)==null?void 0:i.boardX)??0,boardY:((t=s.location)==null?void 0:t.boardY)??0}}),ruleOverridesJson:a.ruleOverrides?JSON.stringify(a.ruleOverrides,null,2):""}}function Zr(a,s){var b,_;const n={...a??{id:s.id,name:s.name,type:s.type},id:s.id.trim(),name:s.name.trim(),type:s.type,description:s.description.trim()||void 0,boardMapId:s.boardMapId.trim()||void 0,weather:s.weather&&s.weather!=="clear"?s.weather:void 0,narrationBeats:s.beatBodies.map((z,Z)=>({id:`${s.id.trim()||"scene"}_beat_${Z+1}`,body:z.trim()})).filter(z=>z.body.length>0)};(b=n.narrationBeats)!=null&&b.length||((_=a==null?void 0:a.narrationBeats)!=null&&_.length&&s.beatBodies.every(z=>!z.trim())?n.narrationBeats=a.narrationBeats:delete n.narrationBeats);const r=s.imageUrl.trim(),i=s.imageAssetRef.trim(),t=s.bgmAssetRef.trim(),d=s.ambientAssetRef.trim();return r?n.imageUrl=r:delete n.imageUrl,i?n.imageAssetRef=i:delete n.imageAssetRef,t?n.bgmAssetRef=t:delete n.bgmAssetRef,d?n.ambientAssetRef=d:delete n.ambientAssetRef,n.weather||delete n.weather,n.boardMapId||delete n.boardMapId,n}function Br(a){return{id:a.id.trim(),title:a.title.trim(),body:a.body.trim(),...a.sceneId.trim()?{sceneId:a.sceneId.trim()}:{},...a.mapNodeId.trim()?{mapNodeId:a.mapNodeId.trim()}:{}}}function Er(a,s){const n={...a??{id:s.id,name:s.name,location:{x:0,y:0,boardX:0,boardY:0}},id:s.id.trim(),name:s.name.trim(),location:{x:Number.isFinite(s.x)?s.x:0,y:Number.isFinite(s.y)?s.y:0,boardX:Number.isFinite(s.boardX)?s.boardX:0,boardY:Number.isFinite(s.boardY)?s.boardY:0}},r=s.memo.trim();r?n.memo=r:delete n.memo;const i=s.castPresetId.trim();return i?n.castPresetId=i:delete n.castPresetId,n}function $r(a,s){let n;const r=s.ruleOverridesJson.trim();if(r){let b;try{b=JSON.parse(r)}catch(_){return{ok:!1,error:"rule_overrides_json",message:_ instanceof Error?_.message:String(_)}}try{n=Mr(b,"scenario-library-ruleOverrides")}catch(_){return{ok:!1,error:"zod",message:_ instanceof Error?_.message:String(_)}}}const i=new Map(a.scenes.map(b=>[b.id,b])),t=new Map(a.npcs.map(b=>[b.id,b])),d={...structuredClone(a),title:s.title.trim(),summary:s.summary.trim(),scenes:s.scenes.map(b=>Zr(i.get(b.id),b)),handouts:s.handouts.map(Br),npcs:s.npcs.map(b=>Er(t.get(b.id),b))};n?d.ruleOverrides=n:delete d.ruleOverrides,d.handouts&&d.handouts.length===0&&delete d.handouts;try{return{ok:!0,scenarioModule:Lr(d,"scenario-library-save")}}catch(b){return{ok:!1,error:"zod",message:b instanceof Error?b.message:String(b)}}}function Sa(a,s="THEATER"){const n=s==="THEATER";return{id:`scene_new_${a}`,name:`Scene ${a}`,type:s,imageUrl:"https://picsum.photos/id/10/1920/1080",imageAssetRef:"",bgmAssetRef:"",ambientAssetRef:"",boardMapId:n?"":`map_${a}`,description:"",weather:"clear",beatBodies:n?[""]:[]}}function Tr(a){return{id:`ho_new_${a}`,title:`Handout ${a}`,body:"…",sceneId:"",mapNodeId:""}}function Fr(a){return{id:`npc_new_${a}`,name:`NPC ${a}`,memo:"",castPresetId:"",x:0,y:0,boardX:0,boardY:0}}function me(a){return!!(a!=null&&a.deletedAt)}function Ra(a){const s=[],n=[];for(const r of a)me(r)?n.push(r):s.push(r);return{active:s,deleted:n}}function qr(a,s,n){const r={};for(const[i,t]of Object.entries(a)){if(!t.scenarioIds.includes(s)){r[i]=t;continue}r[i]={...t,scenarioIds:t.scenarioIds.filter(d=>d!==s),updatedAt:n}}return r}function Dr(a,s,n=new Date().toISOString()){const r=s.trim(),i=a.scenarios[r];return!r||!i||me(i)?null:{campaigns:qr(a.campaigns,r,n),scenarios:{...a.scenarios,[r]:{...i,deletedAt:n}}}}function Or(a,s,n=new Date().toISOString()){const r=s.trim(),i=a.scenarios[r];if(!r||!i||!me(i))return null;const t={...i};delete t.deletedAt;const d={...a.campaigns},b=t.campaignId;if(b&&d[b]&&!d[b].scenarioIds.includes(r)){const _=d[b];d[b]={..._,scenarioIds:[..._.scenarioIds,r],updatedAt:n}}return{campaigns:d,scenarios:{...a.scenarios,[r]:t}}}const Gr="glassbox-campaign-library",Kr=1,K=Zt()(Bt(a=>({campaigns:{},scenarios:{},createCampaign:(s,n,r)=>{const i=xe(),t=new Date().toISOString(),d={campaignId:i,title:n.trim()||"Untitled campaign",baseSystemId:s,basePackRecordId:(r==null?void 0:r.trim())||Ft(s),layerAppendLog:[],scenarioIds:[],createdAt:t,updatedAt:t};return a(b=>({campaigns:{...b.campaigns,[i]:d}})),i},setCampaignBasePackRecord:(s,n)=>{const r=new Date().toISOString();a(i=>{const t=i.campaigns[s];return t?{campaigns:{...i.campaigns,[s]:{...t,basePackRecordId:n.trim(),updatedAt:r}}}:i})},addScenarioFromCurrentModule:({systemId:s,campaignId:n,title:r})=>{const i=J.getState().scenario,t=J.getState().gameSystem;if(!i||!t)return null;const d=xe(),b=new Date().toISOString(),_=structuredClone(i),z={scenarioLibraryId:d,campaignId:n,title:r.trim()||i.title||"Scenario",summary:i.summary||"",systemId:s,scenarioModule:_,savedAt:b};return a(Z=>{const j={...Z.scenarios,[d]:z};if(n&&Z.campaigns[n]){const C=Z.campaigns[n];return{scenarios:j,campaigns:{...Z.campaigns,[n]:{...C,scenarioIds:[...C.scenarioIds,d],updatedAt:b}}}}return{scenarios:j}}),d},saveScenarioFromFormDraft:(s,n)=>{const r=K.getState().scenarios[s];if(!r)return{ok:!1,error:"not_found",message:"scenario not found"};const i=$r(r.scenarioModule,n);if(!i.ok)return i;const t=i.scenarioModule,d=new Date().toISOString();return a(b=>{const _=b.scenarios[s];if(!_)return b;const z={..._,title:t.title,summary:t.summary,scenarioModule:t,savedAt:d},Z={...b.scenarios,[s]:z};if(_.campaignId&&b.campaigns[_.campaignId]){const j=b.campaigns[_.campaignId];return{scenarios:Z,campaigns:{...b.campaigns,[_.campaignId]:{...j,updatedAt:d}}}}return{scenarios:Z}}),i},deleteScenario:s=>{let n=!1;return a(r=>{const i=Dr({campaigns:r.campaigns,scenarios:r.scenarios},s);return i?(n=!0,i):r}),n},restoreScenario:s=>{let n=!1;return a(r=>{const i=Or({campaigns:r.campaigns,scenarios:r.scenarios},s);return i?(n=!0,i):r}),n},appendCampaignPackRelative:(s,{kind:n,label:r,systemId:i,relativePath:t})=>{const d=new Date().toISOString(),b=xe();a(_=>{const z=_.campaigns[s];return z?{campaigns:{..._.campaigns,[s]:{...z,layerAppendLog:[...z.layerAppendLog,{entryId:b,appendedAt:d,kind:n,label:r.trim()||"Layer",ref:{type:"pack_relative",systemId:i.trim(),relativePath:t.trim()}}],updatedAt:d}}}:_})},appendCampaignInlinePatch:(s,{kind:n,label:r,patch:i})=>{const t=new Date().toISOString(),d=xe();a(b=>{const _=b.campaigns[s];return _?{campaigns:{...b.campaigns,[s]:{..._,layerAppendLog:[..._.layerAppendLog,{entryId:d,appendedAt:t,kind:n,label:r.trim()||"Layer",ref:{type:"inline_patch",patch:i}}],updatedAt:t}}}:b})},setCampaignLayerDisabled:(s,n,r)=>{const i=new Date().toISOString();a(t=>{const d=t.campaigns[s];return d?{campaigns:{...t.campaigns,[s]:{...d,layerAppendLog:d.layerAppendLog.map(b=>b.entryId===n?{...b,disabled:r}:b),updatedAt:i}}}:t})}}),{name:Gr,version:Kr,storage:Et(()=>localStorage),partialize:a=>({campaigns:a.campaigns,scenarios:a.scenarios})}));function Wr(a,s){return Object.values(a).filter(n=>n.baseSystemId===s)}function Hr(a,s){return Object.values(a).filter(n=>n.campaignId===null&&n.systemId===s)}function Vr(a,s){return a.scenarioIds.map(n=>s[n]).filter(n=>!!n&&!me(n))}function Ur(a,s){const n=Vr(a,s),r=new Set(n.map(t=>t.scenarioLibraryId)),i=Object.values(s).filter(t=>t.campaignId===a.campaignId&&me(t)&&!r.has(t.scenarioLibraryId));return[...n,...i]}function Jr(a){var n;const s=new Set;for(const r of Object.values(a)){const i=(n=r.basePackRecordId)==null?void 0:n.trim();i&&s.add(i)}return s}function Yr(){X.getState().ensureBundledPackRecords();const{campaigns:a,scenarios:s}=K.getState(),n=X.getState().records,r=Jr(a),i={};for(const d of r){const b=n[d];b&&(i[d]=b)}const t={format:"glassbox-campaign-library",version:2,exportedAt:new Date().toISOString(),campaigns:a,scenarios:s,packRecords:i};return JSON.stringify(t,null,2)}function Xr(a){try{const s=JSON.parse(a);if(!s||typeof s!="object")return{ok:!1,error:"invalid_json"};const n=s;if(n.format!=="glassbox-campaign-library")return{ok:!1,error:"unsupported_format"};const r=n.version;if(r!==1&&r!==2)return{ok:!1,error:"unsupported_format"};if(r===2&&n.packRecords!=null){if(typeof n.packRecords!="object"||Array.isArray(n.packRecords))return{ok:!1,error:"invalid_pack_records"};if(!ts(n.packRecords).ok)return{ok:!1,error:"bad_pack_record"}}const i=n.campaigns,t=n.scenarios;return!i||typeof i!="object"||Array.isArray(i)?{ok:!1,error:"missing_campaigns"}:!t||typeof t!="object"||Array.isArray(t)?{ok:!1,error:"missing_scenarios"}:(K.setState({campaigns:i,scenarios:t}),{ok:!0})}catch(s){return{ok:!1,error:s instanceof Error?s.message:"parse_error"}}}async function De(a,s){var _;const n=a.trim(),r=X.getState().records[n];if(!r)return{ok:!1,error:"not_found"};if(r.sourceKind!=="imported_zip")return{ok:!1,error:"not_imported_zip"};let i=null;if(s!=null&&s.file?i=await s.file.arrayBuffer():i=await Za(n),!i)return{ok:!1,error:"cache_miss"};let t;try{t=await qt({type:"gbx_zip",buffer:i,passphrase:s==null?void 0:s.passphrase})}catch(z){const{GbxAesNeedsPassphraseError:Z,GbxAesError:j}=await Dt(async()=>{const{GbxAesNeedsPassphraseError:C,GbxAesError:D}=await import("./gbx-core-BFXZg23R.js").then(S=>S.fP);return{GbxAesNeedsPassphraseError:C,GbxAesError:D}},__vite__mapDeps([0,1,2,3,4,5,6,7,8]));return z instanceof Z?{ok:!1,error:"needs_passphrase"}:z instanceof j&&z.code==="wrong_passphrase"?{ok:!1,error:"wrong_passphrase"}:{ok:!1,error:"parse_error"}}if(!t)return{ok:!1,error:"parse_error"};const d=t.systemId.trim();if(d!==r.systemId.trim())return{ok:!1,error:"system_mismatch"};if((_=r.contentHash)!=null&&_.trim()){const z=t.manifest;if(!z)return{ok:!1,error:"parse_error"};let Z;try{Z=await Ot(z,d)}catch{return{ok:!1,error:"parse_error"}}if(Z!==r.contentHash.trim())return{ok:!1,error:"hash_mismatch"}}Gt(d,{pack:t.pack,displayName:r.displayName.trim()||t.displayName,packRecordId:n,...t.gameRulesCore&&t.manifest?{gameRulesCore:t.gameRulesCore,manifest:t.manifest,layerPartialsByPath:t.layerPartialsByPath??{}}:{}});const b=t.plainZipBuffer??i;return cs(n,b).catch(z=>{console.warn("[reloadImportedZipPackRecord] pack zip cache refresh failed:",z)}),{ok:!0,systemId:d}}async function Te(a,s){var i;const n=await De(a,{file:s.file});if(n.ok||n.error!=="needs_passphrase")return n;const r=((i=s.promptPassphrase())==null?void 0:i.trim())??"";return r?De(a,{file:s.file,passphrase:r}):{ok:!1,error:"needs_passphrase"}}function Va(a){return`${a.trim().replace(/[\\/:*?"<>|]+/g,"_").replace(/\s+/g,"_")||"pack"}.gbx`}async function Oe(a,s){const n=a.trim();if(!n)return{ok:!1,error:"not_found"};const r=X.getState().records[n];if(!r)return{ok:!1,error:"not_found"};if(r.sourceKind!=="imported_zip")return{ok:!1,error:"not_imported_zip"};const i=(s==null?void 0:s.buffer)??await Za(n);return i?i.byteLength<1?{ok:!1,error:"empty_buffer"}:{ok:!0,packRecordId:n,systemId:r.systemId,fileName:Va(r.systemId),buffer:i.slice(0)}:{ok:!1,error:"cache_miss"}}function Qr(a){return Va(a).replace(/\.gbx$/i,".aes.gbx")}async function Ca(a,s,n){const r=s.trim();if(!r)return{ok:!1,error:"empty_passphrase"};const i=await Oe(a,{buffer:n==null?void 0:n.buffer});if(!i.ok)return i;try{const t=await Kt(i.buffer,r,n==null?void 0:n.seal);return{ok:!0,packRecordId:i.packRecordId,systemId:i.systemId,fileName:Qr(i.systemId),buffer:t}}catch(t){return t instanceof Wt&&t.code==="crypto_unavailable"?{ok:!1,error:"crypto_unavailable"}:{ok:!1,error:"seal_failed"}}}function za(a){X.getState().ensureBundledPackRecords();const{basePackRecordId:s,baseSystemId:n}=a,r=s.trim();if(r.startsWith(_a)){const t=r.slice(_a.length).trim();return Pa().includes(t)?t!==n.trim()?"system_mismatch":null:"bundled_missing"}const i=X.getState().records[r];return i?i.systemId.trim()!==n.trim()?"system_mismatch":i.sourceKind==="imported_zip"&&!Aa(r)?"zip_reload_required":null:"pack_record_missing"}function eo(){X.getState().ensureBundledPackRecords();const a=X.getState().records,s=new Set(Pa());return Object.values(a).map(n=>({packRecordId:n.packRecordId,systemId:n.systemId,displayName:n.displayName,sourceKind:n.sourceKind,runtimeLoaded:n.sourceKind==="bundled"?s.has(n.systemId):Aa(n.packRecordId),contentHash:n.contentHash})).sort((n,r)=>{const i=n.systemId.localeCompare(r.systemId);return i!==0?i:n.packRecordId.localeCompare(r.packRecordId)})}function ao(a){X.getState().ensureBundledPackRecords();const s=a.trim();return Object.values(X.getState().records).filter(n=>n.systemId.trim()===s).sort((n,r)=>n.sourceKind!==r.sourceKind?n.sourceKind==="bundled"?-1:1:n.displayName.localeCompare(r.displayName))}function to(a){const s=a.trim(),n=Ht(s);if(n!=null&&n.manifest){const i=n.manifest;return[...i.supplements??[],...i.houseRules??[]].map(ka)}const r=Vt(s);return r?[...r.supplements??[],...r.houseRules??[]].map(ka):[]}const so=({record:a,onClose:s,onSaved:n})=>{const{t:r}=oe(),i=K(k=>k.saveScenarioFromFormDraft),[t,d]=I.useState(()=>Na(a.scenarioModule)),[b,_]=I.useState(null),[z,Z]=I.useState(!1),j=t.scenes.length,C=t.handouts.length,D=t.npcs.length,S="gbx-scenario-asset-refs",v=I.useMemo(()=>{const k=new Set;for(const y of t.scenes)for(const x of[y.imageUrl,y.imageAssetRef,y.bgmAssetRef,y.ambientAssetRef]){const w=x.trim();w&&k.add(w)}return[...k]},[t.scenes]),R=I.useMemo(()=>t.title.trim().length>0&&t.summary.trim().length>0&&j>=1,[t.title,t.summary,j]),A=k=>{d(y=>({...y,...k})),_(null),Z(!1)},se=()=>{const k=i(a.scenarioLibraryId,t);if(!k.ok){_(k.message),Z(!1);return}const y=K.getState().scenarios[a.scenarioLibraryId];if(!y){_(r("app.gm_workspace.scenario_editor.save_missing"));return}d(Na(y.scenarioModule)),_(null),Z(!0),n(y)};return e.jsxs("div",{className:"scenario-form-editor","data-testid":"gbx-gm-scenario-editor",children:[e.jsxs("div",{className:"scenario-form-editor-header",children:[e.jsx("h3",{children:r("app.gm_workspace.scenario_editor.title")}),e.jsx("button",{type:"button",className:"desk-action-btn text-only","data-testid":"gbx-gm-scenario-editor-close",onClick:s,"aria-label":r("ui.close"),title:r("ui.close"),children:e.jsx(ls,{size:16})})]}),e.jsx("p",{className:"hint-text",children:r("app.gm_workspace.scenario_editor.hint")}),e.jsxs("div",{className:"scenario-form-section",children:[e.jsx("label",{htmlFor:"gbx-sc-title",children:r("app.gm_workspace.scenario_editor.field_title")}),e.jsx("input",{id:"gbx-sc-title","data-testid":"gbx-gm-scenario-editor-title",className:"modal-input",value:t.title,onChange:k=>A({title:k.target.value})}),e.jsx("label",{htmlFor:"gbx-sc-summary",children:r("app.gm_workspace.scenario_editor.field_summary")}),e.jsx("textarea",{id:"gbx-sc-summary","data-testid":"gbx-gm-scenario-editor-summary",className:"modal-textarea",value:t.summary,onChange:k=>A({summary:k.target.value})})]}),e.jsxs("div",{className:"scenario-form-section","data-testid":"gbx-gm-scenario-editor-scenes",children:[e.jsxs("div",{className:"section-title-bar",children:[e.jsx("h4",{children:r("app.gm_workspace.scenario_editor.scenes_heading")}),e.jsxs("button",{type:"button",className:"desk-action-btn","data-testid":"gbx-gm-scenario-editor-add-scene",onClick:()=>A({scenes:[...t.scenes,Sa(j+1,"THEATER")]}),children:[e.jsx(te,{size:14})," ",r("app.gm_workspace.scenario_editor.add_scene_theater")]}),e.jsxs("button",{type:"button",className:"desk-action-btn","data-testid":"gbx-gm-scenario-editor-add-scene-board",onClick:()=>A({scenes:[...t.scenes,Sa(j+1,"BOARD")]}),children:[e.jsx(te,{size:14})," ",r("app.gm_workspace.scenario_editor.add_scene_board")]})]}),t.scenes.map((k,y)=>e.jsxs("div",{className:"scenario-form-card","data-testid":`gbx-gm-scenario-editor-scene-${y}`,children:[e.jsxs("div",{className:"scenario-form-card-head",children:[e.jsxs("span",{children:[r("app.gm_workspace.scenario_editor.scene_index",{index:y+1}),e.jsx("span",{className:"scenario-form-run-sheet",children:r("app.gm_workspace.scenario_editor.run_sheet",{beats:k.beatBodies.filter(x=>x.trim()).length,hos:t.handouts.filter(x=>x.sceneId.trim()===k.id.trim()).length})})]}),e.jsx("button",{type:"button",className:"desk-action-btn text-only",disabled:j<=1,"aria-label":r("app.gm_workspace.scenario_editor.remove_scene"),title:r("app.gm_workspace.scenario_editor.remove_scene"),onClick:()=>A({scenes:t.scenes.filter((x,w)=>w!==y)}),children:e.jsx(pe,{size:14})})]}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_id")}),e.jsx("input",{className:"modal-input",value:k.id,onChange:x=>{const w=t.scenes.map((f,N)=>N===y?{...f,id:x.target.value}:f);A({scenes:w})}}),e.jsx("label",{children:r("ui.name")}),e.jsx("input",{className:"modal-input","data-testid":`gbx-gm-scenario-editor-scene-name-${y}`,value:k.name,onChange:x=>{const w=t.scenes.map((f,N)=>N===y?{...f,name:x.target.value}:f);A({scenes:w})}}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_scene_type")}),e.jsxs("select",{className:"modal-select",value:k.type,onChange:x=>{const w=x.target.value==="BOARD"?"BOARD":"THEATER",f=t.scenes.map((N,W)=>{if(W!==y)return N;const q={...N,type:w};return w==="BOARD"&&!q.boardMapId.trim()&&(q.boardMapId=`map_${y+1}`),w==="THEATER"&&q.beatBodies.length===0&&(q.beatBodies=[""]),q});A({scenes:f})},children:[e.jsx("option",{value:"THEATER",children:r("app.view.theater")}),e.jsx("option",{value:"BOARD",children:r("app.view.board")})]}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_image_url")}),e.jsx("input",{className:"modal-input",value:k.imageUrl,onChange:x=>{const w=t.scenes.map((f,N)=>N===y?{...f,imageUrl:x.target.value}:f);A({scenes:w})}}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_image_asset_ref")}),e.jsx("input",{className:"modal-input",value:k.imageAssetRef,list:S,onChange:x=>{const w=t.scenes.map((f,N)=>N===y?{...f,imageAssetRef:x.target.value}:f);A({scenes:w})}}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_bgm")}),e.jsx("input",{className:"modal-input",value:k.bgmAssetRef,list:S,onChange:x=>{const w=t.scenes.map((f,N)=>N===y?{...f,bgmAssetRef:x.target.value}:f);A({scenes:w})}}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_ambient")}),e.jsx("input",{className:"modal-input",value:k.ambientAssetRef,list:S,onChange:x=>{const w=t.scenes.map((f,N)=>N===y?{...f,ambientAssetRef:x.target.value}:f);A({scenes:w})}}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_board_map_id")}),e.jsx("input",{className:"modal-input",value:k.boardMapId,onChange:x=>{const w=t.scenes.map((f,N)=>N===y?{...f,boardMapId:x.target.value}:f);A({scenes:w})}}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_description")}),e.jsx("textarea",{className:"modal-textarea",value:k.description,onChange:x=>{const w=t.scenes.map((f,N)=>N===y?{...f,description:x.target.value}:f);A({scenes:w})}}),e.jsx("label",{children:r("theater.weather.heading")}),e.jsxs("select",{className:"modal-select",value:k.weather,onChange:x=>{const w=x.target.value,f=t.scenes.map((N,W)=>W===y?{...N,weather:w}:N);A({scenes:f})},children:[e.jsx("option",{value:"clear",children:r("theater.weather.clear")}),e.jsx("option",{value:"rain",children:r("theater.weather.rain")}),e.jsx("option",{value:"fog",children:r("theater.weather.fog")}),e.jsx("option",{value:"light",children:r("theater.weather.light")})]}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_beats")}),(k.beatBodies.length?k.beatBodies:[""]).map((x,w)=>e.jsx("textarea",{className:"modal-textarea",value:x,onChange:f=>{const N=[...k.beatBodies.length?k.beatBodies:[""]];N[w]=f.target.value;const W=t.scenes.map((q,B)=>B===y?{...q,beatBodies:N}:q);A({scenes:W})}},`beat-${y}-${w}`)),e.jsxs("button",{type:"button",className:"desk-action-btn",onClick:()=>{const x=[...k.beatBodies.length?k.beatBodies:[""],""],w=t.scenes.map((f,N)=>N===y?{...f,beatBodies:x}:f);A({scenes:w})},children:[e.jsx(te,{size:14})," ",r("app.gm_workspace.scenario_editor.add_beat")]}),k.imageUrl||k.imageAssetRef||k.description?e.jsxs("div",{className:"scenario-form-preview","data-testid":`gbx-gm-scenario-editor-preview-${y}`,children:[/^https?:\/\//i.test(k.imageUrl.trim())?e.jsx("img",{src:k.imageUrl.trim(),"aria-hidden":!0}):k.imageAssetRef.trim()?e.jsx("p",{className:"scenario-form-preview-ref",children:k.imageAssetRef.trim()}):null,k.description?e.jsx("p",{children:k.description}):null]}):null]},`scene-${y}`)),e.jsx("datalist",{id:S,children:v.map(k=>e.jsx("option",{value:k},k))})]}),e.jsxs("div",{className:"scenario-form-section","data-testid":"gbx-gm-scenario-editor-handouts",children:[e.jsxs("div",{className:"section-title-bar",children:[e.jsx("h4",{children:r("app.gm_workspace.scenario_editor.handouts_heading")}),e.jsxs("button",{type:"button",className:"desk-action-btn","data-testid":"gbx-gm-scenario-editor-add-handout",onClick:()=>A({handouts:[...t.handouts,Tr(C+1)]}),children:[e.jsx(te,{size:14})," ",r("app.gm_workspace.scenario_editor.add_handout")]})]}),t.handouts.length===0&&e.jsx("p",{className:"empty-text",children:r("app.gm_workspace.scenario_editor.handouts_empty")}),t.handouts.map((k,y)=>e.jsxs("div",{className:"scenario-form-card","data-testid":`gbx-gm-scenario-editor-handout-${y}`,children:[e.jsxs("div",{className:"scenario-form-card-head",children:[e.jsx("span",{children:r("app.gm_workspace.scenario_editor.handout_index",{index:y+1})}),e.jsx("button",{type:"button",className:"desk-action-btn text-only","aria-label":r("app.gm_workspace.scenario_editor.remove_handout"),title:r("app.gm_workspace.scenario_editor.remove_handout"),onClick:()=>A({handouts:t.handouts.filter((x,w)=>w!==y)}),children:e.jsx(pe,{size:14})})]}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_id")}),e.jsx("input",{className:"modal-input",value:k.id,onChange:x=>{const w=t.handouts.map((f,N)=>N===y?{...f,id:x.target.value}:f);A({handouts:w})}}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_handout_title")}),e.jsx("input",{className:"modal-input","data-testid":`gbx-gm-scenario-editor-handout-title-${y}`,value:k.title,onChange:x=>{const w=t.handouts.map((f,N)=>N===y?{...f,title:x.target.value}:f);A({handouts:w})}}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_handout_body")}),e.jsx("textarea",{className:"modal-textarea","data-testid":`gbx-gm-scenario-editor-handout-body-${y}`,value:k.body,onChange:x=>{const w=t.handouts.map((f,N)=>N===y?{...f,body:x.target.value}:f);A({handouts:w})}}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_handout_scene")}),e.jsx("input",{className:"modal-input",value:k.sceneId,onChange:x=>{const w=t.handouts.map((f,N)=>N===y?{...f,sceneId:x.target.value}:f);A({handouts:w})}}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_handout_node")}),e.jsx("input",{className:"modal-input",value:k.mapNodeId,onChange:x=>{const w=t.handouts.map((f,N)=>N===y?{...f,mapNodeId:x.target.value}:f);A({handouts:w})}})]},`ho-${y}`))]}),e.jsxs("div",{className:"scenario-form-section","data-testid":"gbx-gm-scenario-editor-cast",children:[e.jsxs("div",{className:"section-title-bar",children:[e.jsx("h4",{children:r("app.gm_workspace.scenario_editor.cast_heading")}),e.jsxs("button",{type:"button",className:"desk-action-btn","data-testid":"gbx-gm-scenario-editor-add-npc",onClick:()=>A({npcs:[...t.npcs,Fr(D+1)]}),children:[e.jsx(te,{size:14})," ",r("app.gm_workspace.scenario_editor.add_npc")]})]}),t.npcs.map((k,y)=>e.jsxs("div",{className:"scenario-form-card","data-testid":`gbx-gm-scenario-editor-npc-${y}`,children:[e.jsxs("div",{className:"scenario-form-card-head",children:[e.jsx("span",{children:r("app.gm_workspace.scenario_editor.npc_index",{index:y+1})}),e.jsx("button",{type:"button",className:"desk-action-btn text-only","aria-label":r("app.gm_workspace.scenario_editor.remove_npc"),title:r("app.gm_workspace.scenario_editor.remove_npc"),onClick:()=>A({npcs:t.npcs.filter((x,w)=>w!==y)}),children:e.jsx(pe,{size:14})})]}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_id")}),e.jsx("input",{className:"modal-input",value:k.id,onChange:x=>{const w=t.npcs.map((f,N)=>N===y?{...f,id:x.target.value}:f);A({npcs:w})}}),e.jsx("label",{children:r("ui.name")}),e.jsx("input",{className:"modal-input","data-testid":`gbx-gm-scenario-editor-npc-name-${y}`,value:k.name,onChange:x=>{const w=t.npcs.map((f,N)=>N===y?{...f,name:x.target.value}:f);A({npcs:w})}}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_cast_preset")}),e.jsx("input",{className:"modal-input",value:k.castPresetId,onChange:x=>{const w=t.npcs.map((f,N)=>N===y?{...f,castPresetId:x.target.value}:f);A({npcs:w})}}),e.jsx("label",{children:r("app.gm_workspace.scenario_editor.field_memo")}),e.jsx("textarea",{className:"modal-textarea",value:k.memo,onChange:x=>{const w=t.npcs.map((f,N)=>N===y?{...f,memo:x.target.value}:f);A({npcs:w})}}),e.jsx("div",{className:"scenario-form-loc-grid",children:["x","y","boardX","boardY"].map(x=>e.jsxs("div",{children:[e.jsx("label",{children:r(`app.gm_workspace.scenario_editor.field_loc_${x}`)}),e.jsx("input",{className:"modal-input",type:"number",value:k[x],onChange:w=>{const f=Number(w.target.value),N=t.npcs.map((W,q)=>q===y?{...W,[x]:Number.isFinite(f)?f:0}:W);A({npcs:N})}})]},x))})]},`npc-${y}`))]}),e.jsxs("div",{className:"scenario-form-section",children:[e.jsx("label",{htmlFor:"gbx-sc-overrides",children:r("app.gm_workspace.scenario_editor.field_rule_overrides")}),e.jsx("p",{className:"hint-text",children:r("app.gm_workspace.scenario_editor.rule_overrides_hint")}),e.jsx("textarea",{id:"gbx-sc-overrides","data-testid":"gbx-gm-scenario-editor-rule-overrides",className:"modal-textarea",value:t.ruleOverridesJson,onChange:k=>A({ruleOverridesJson:k.target.value}),spellCheck:!1})]}),b&&e.jsx("p",{className:"scenario-form-error","data-testid":"gbx-gm-scenario-editor-error",role:"alert",children:b}),z&&e.jsx("p",{className:"scenario-form-ok","data-testid":"gbx-gm-scenario-editor-saved",children:r("app.gm_workspace.scenario_editor.saved")}),e.jsxs("div",{className:"scenario-form-actions",children:[e.jsx("button",{type:"button",className:"desk-action-btn",onClick:s,children:r("ui.close")}),e.jsxs("button",{type:"button",className:"desk-action-btn accent","data-testid":"gbx-gm-scenario-editor-save",disabled:!R,onClick:se,children:[e.jsx(ds,{size:14})," ",r("app.gm_workspace.scenario_editor.save")]})]}),e.jsx("style",{children:`
        .scenario-form-editor {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 12px 0 24px;
        }
        .scenario-form-editor-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .scenario-form-editor-header h3 {
          margin: 0;
          font-size: 1.05rem;
        }
        .scenario-form-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 12px;
          border: var(--gb-edge-width) solid var(--gb-border-dark);
          border-radius: var(--gb-radius-panel);
          background: var(--gb-bg-element);
        }
        .scenario-form-section h4 {
          margin: 0;
          font-size: 0.95rem;
        }
        .scenario-form-section label {
          font-size: 0.78rem;
          font-weight: 700;
          opacity: 0.85;
        }
        .scenario-form-card {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 10px;
          border: var(--gb-edge-width) solid var(--gb-btn-secondary-border);
          border-radius: var(--gb-radius-element);
          background: var(--gb-bg-base);
        }
        .scenario-form-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          font-weight: 700;
        }
        .scenario-form-loc-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px;
        }
        .scenario-form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }
        .scenario-form-error {
          margin: 0;
          color: var(--gb-text-main);
          border: var(--gb-edge-width) solid var(--gb-border-light);
          background: color-mix(in srgb, var(--theme-primary) 12%, var(--gb-bg-element));
          padding: 10px 12px;
          border-radius: var(--gb-radius-element);
          white-space: pre-wrap;
          font-size: 0.8rem;
          font-family: monospace;
        }
        .scenario-form-ok {
          margin: 0;
          font-size: 0.85rem;
          font-weight: 700;
        }
        .scenario-form-run-sheet {
          display: block;
          font-size: 0.72rem;
          font-weight: 500;
          opacity: 0.7;
        }
        .scenario-form-preview {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 8px;
          border-radius: var(--gb-radius-element);
          border: var(--gb-edge-width) solid var(--gb-border-light);
          background: var(--gb-bg-element);
        }
        .scenario-form-preview img {
          width: 100%;
          max-height: 140px;
          object-fit: cover;
          border-radius: var(--gb-radius-element);
        }
        .scenario-form-preview p,
        .scenario-form-preview-ref {
          margin: 0;
          font-size: 0.78rem;
          line-height: 1.4;
          white-space: pre-wrap;
        }
      `})]})},ro=({openCampaign:a,basePackOptions:s,activeCampaignScenarios:n,deletedCampaignScenarios:r,showDeletedCampaignScenarios:i,setShowDeletedCampaignScenarios:t,setCampaignBasePackRecord:d,setCampaignLayerDisabled:b,openAddLayerModal:_,handleNewScenarioInCampaign:z,setEditingScenarioId:Z,enterWithScenario:j,handleDeleteLibraryScenario:C,handleRestoreLibraryScenario:D,onBackToList:S})=>{const{t:v}=oe();return e.jsxs("div",{className:"campaign-notebook",children:[e.jsxs("button",{type:"button",className:"desk-action-btn text-only",onClick:S,children:[e.jsx(Ba,{size:16})," ",v("app.campaign_hub.back_to_list")]}),e.jsxs("div",{className:"notebook-header",children:[e.jsx("h2",{children:a.title}),e.jsx("span",{className:"notebook-sub-id",children:v("app.gm_workspace.id_label",{id:a.campaignId})})]}),e.jsxs("div",{className:"notebook-setting-card",children:[e.jsx("label",{children:v("app.campaign_hub.base_pack_label")}),e.jsxs("select",{value:a.basePackRecordId,onChange:R=>d(a.campaignId,R.target.value),className:"notebook-select",children:[!s.some(R=>R.packRecordId===a.basePackRecordId)&&e.jsx("option",{value:a.basePackRecordId,children:v("app.campaign_hub.base_pack_missing_option",{id:a.basePackRecordId})}),s.map(R=>e.jsxs("option",{value:R.packRecordId,children:[R.displayName," — ",R.packRecordId]},R.packRecordId))]}),e.jsx("p",{className:"hint-text",children:v("app.campaign_hub.base_pack_hint")})]}),e.jsxs("div",{className:"notebook-layers-section",children:[e.jsxs("div",{className:"section-title-bar",children:[e.jsx("h3",{children:v("app.campaign_hub.layers_section")}),e.jsxs("button",{type:"button",className:"desk-action-btn",onClick:_,children:[e.jsx(ps,{size:14})," ",v("app.campaign_hub.add_layer")]})]}),e.jsx("p",{className:"hint-text",children:v("app.campaign_hub.layers_hint")}),e.jsxs("div",{className:"layers-list",children:[a.layerAppendLog.map(R=>e.jsxs("div",{className:`layer-row ${R.disabled?"disabled":""}`,children:[e.jsxs("div",{className:"layer-info",children:[e.jsx("span",{className:"layer-label",children:R.label}),e.jsx("span",{className:"layer-kind",children:v("ui.parentheses_format",{text:R.kind==="supplement"?v("app.campaign_hub.layer_kind_supplement"):v("app.campaign_hub.layer_kind_house")})}),e.jsx("span",{className:"layer-ref-detail",children:R.ref.type==="placeholder"?v("app.campaign_hub.layer_placeholder"):R.ref.type==="pack_relative"?v("ui.label_colon_value_format",{label:v("app.campaign_hub.layer_pack_relative"),value:R.ref.relativePath}):v("app.campaign_hub.layer_inline_patch")})]}),(R.ref.type==="inline_patch"||R.ref.type==="pack_relative")&&e.jsxs("label",{className:"layer-toggle-switch",children:[e.jsx("input",{type:"checkbox",checked:!!R.disabled,onChange:A=>b(a.campaignId,R.entryId,A.target.checked)}),e.jsx("span",{children:v("app.campaign_hub.layer_off")})]})]},R.entryId)),a.layerAppendLog.length===0&&e.jsx("p",{className:"empty-text",children:v("app.campaign_hub.layers_empty")})]})]}),e.jsxs("div",{className:"notebook-scenarios-section",children:[e.jsxs("div",{className:"section-title-bar",children:[e.jsx("h3",{children:v("app.gm_workspace.scenarios_in_campaign")}),e.jsxs("button",{type:"button",className:"desk-action-btn",onClick:()=>z(a.campaignId),children:[e.jsx(te,{size:14})," ",v("app.gm_workspace.create_scenario")]})]}),e.jsxs("div",{className:"notebook-scenarios-list",children:[n.map(R=>e.jsxs("div",{className:"notebook-scenario-row",children:[e.jsxs("div",{className:"scenario-row-info",children:[e.jsx("span",{className:"scenario-title",children:R.title}),R.summary&&e.jsx("span",{className:"scenario-desc",children:R.summary})]}),e.jsxs("div",{className:"scenario-row-actions",children:[e.jsxs("button",{type:"button",className:"desk-action-btn","data-testid":`gbx-gm-scenario-edit-${R.scenarioLibraryId}`,onClick:()=>Z(R.scenarioLibraryId),children:[e.jsx(Ea,{size:14})," ",v("app.gm_workspace.edit_scenario")]}),e.jsxs("button",{type:"button",className:"notebook-play-btn",onClick:()=>void j(R),children:[e.jsx(Fe,{size:14})," ",v("app.gm_workspace.play_start_btn")]}),e.jsx("button",{type:"button",className:"gb-icon-btn-compact","data-testid":`gbx-gm-scenario-delete-${R.scenarioLibraryId}`,title:v("app.gm_workspace.delete_scenario"),"aria-label":v("app.gm_workspace.delete_scenario"),onClick:()=>C(R),children:e.jsx(pe,{size:14,"aria-hidden":!0})})]})]},R.scenarioLibraryId)),n.length===0&&e.jsx("p",{className:"empty-text",children:v("app.campaign_hub.empty_scenarios_in_campaign")}),r.length>0?e.jsxs("div",{className:"library-deleted-fold","data-testid":"gbx-gm-campaign-deleted-fold",children:[e.jsxs("button",{type:"button",className:"library-deleted-fold-toggle","data-testid":"gbx-gm-campaign-deleted-toggle","aria-expanded":i,onClick:()=>t(R=>!R),children:[i?e.jsx(Ge,{size:14,"aria-hidden":!0}):e.jsx(ke,{size:14,"aria-hidden":!0}),v("app.gm_workspace.deleted_scenarios_fold",{count:r.length})]}),i?r.map(R=>e.jsxs("div",{className:"notebook-scenario-row is-deleted",children:[e.jsxs("div",{className:"scenario-row-info",children:[e.jsx("span",{className:"scenario-title",children:R.title}),R.summary&&e.jsx("span",{className:"scenario-desc",children:R.summary})]}),e.jsx("div",{className:"scenario-row-actions",children:e.jsx("button",{type:"button",className:"gb-icon-btn-compact","data-testid":`gbx-gm-scenario-restore-${R.scenarioLibraryId}`,title:v("app.gm_workspace.restore_scenario"),"aria-label":v("app.gm_workspace.restore_scenario"),onClick:()=>D(R),children:e.jsx($a,{size:14,"aria-hidden":!0})})})]},R.scenarioLibraryId)):null]}):null]})]})]})},oo=({editingScenario:a,onCloseEditingScenario:s,onScenarioSaved:n,openCampaign:r,campaignList:i,handleNewCampaign:t,setOpenCampaignId:d,basePackOptions:b,activeCampaignScenarios:_,deletedCampaignScenarios:z,showDeletedCampaignScenarios:Z,setShowDeletedCampaignScenarios:j,setCampaignBasePackRecord:C,setCampaignLayerDisabled:D,openAddLayerModal:S,handleNewScenarioInCampaign:v,setEditingScenarioId:R,enterWithScenario:A,handleDeleteLibraryScenario:se,handleRestoreLibraryScenario:k})=>{const{t:y}=oe();return e.jsxs("div",{className:"desk-panel create-panel scrollable",children:[e.jsx("div",{className:"panel-header",children:e.jsxs("h2",{children:[e.jsx(Ta,{size:20,style:{marginRight:"6px",display:"inline-block",verticalAlign:"middle"}})," ",y("app.gm_workspace.tool_create")]})}),a?e.jsx(so,{record:a,onClose:s,onSaved:x=>void n(x)},a.scenarioLibraryId):r?e.jsx(ro,{openCampaign:r,basePackOptions:b,activeCampaignScenarios:_,deletedCampaignScenarios:z,showDeletedCampaignScenarios:Z,setShowDeletedCampaignScenarios:j,setCampaignBasePackRecord:C,setCampaignLayerDisabled:D,openAddLayerModal:S,handleNewScenarioInCampaign:v,setEditingScenarioId:R,enterWithScenario:A,handleDeleteLibraryScenario:se,handleRestoreLibraryScenario:k,onBackToList:()=>d(null)}):e.jsxs("div",{className:"campaigns-workspace",children:[e.jsxs("div",{className:"section-title-bar",children:[e.jsx("h3",{children:y("app.campaign_hub.campaigns_section")}),e.jsxs("button",{type:"button",className:"desk-action-btn accent",onClick:t,children:[e.jsx(te,{size:16})," ",y("app.gm_workspace.create_new_campaign")]})]}),e.jsxs("div",{className:"campaign-grid",children:[i.map(x=>e.jsxs("div",{className:"campaign-card",onClick:()=>d(x.campaignId),children:[e.jsx("h4",{children:x.title}),e.jsx("p",{children:y("app.gm_workspace.id_label",{id:x.campaignId})}),e.jsx("p",{children:y("app.gm_workspace.layers_count",{count:x.layerAppendLog.length})}),e.jsxs("span",{className:"open-campaign-link",children:[y("app.gm_workspace.open_notebook")," ",e.jsx(ke,{size:14})]})]},x.campaignId)),i.length===0&&e.jsx("div",{className:"empty-card",children:e.jsx("p",{children:y("app.campaign_hub.empty_campaigns")})})]})]})]})},no=({warehouseOpen:a,setWarehouseOpen:s,warehouseRows:n,selectedSystemId:r,warehouseVerifyBusyId:i,warehouseReloadBusyId:t,warehouseExportBusyId:d,handleExportWarehouse:b,onImportWarehouseMerge:_,onImportWarehouseReplace:z,handleReloadWarehouseFromCache:Z,handleExportWarehousePlainGbx:j,handleExportWarehouseAesGbx:C,onVerifyWarehouse:D})=>{const{t:S}=oe();return e.jsxs("div",{className:"pack-warehouse-section",children:[e.jsxs("div",{className:"section-title-bar",children:[e.jsx("h3",{children:S("app.campaign_hub.warehouse_cloud_title")}),e.jsxs("button",{type:"button",className:"desk-action-btn",onClick:()=>s(!a),children:[e.jsx(Fa,{size:14})," ",S(a?"app.campaign_hub.warehouse_hide":"app.campaign_hub.warehouse_show")]})]}),e.jsx("p",{className:"hint-text",children:S("app.campaign_hub.warehouse_hint")}),a&&e.jsxs("div",{className:"warehouse-detail-area",children:[e.jsx("p",{className:"hint-text",style:{marginBottom:"12px"},children:S("app.campaign_hub.warehouse_io_hint")}),e.jsxs("div",{className:"warehouse-io-row",children:[e.jsxs("button",{type:"button",className:"desk-action-btn",onClick:b,children:[e.jsx(qe,{size:14})," ",S("app.campaign_hub.warehouse_export")]}),e.jsxs("button",{type:"button",className:"desk-action-btn",onClick:_,children:[e.jsx(_e,{size:14})," ",S("app.campaign_hub.warehouse_import_merge")]}),e.jsxs("button",{type:"button",className:"desk-action-btn",onClick:z,children:[e.jsx(_e,{size:14})," ",S("app.campaign_hub.warehouse_import_replace")]})]}),e.jsx("div",{className:"warehouse-table-container",children:e.jsxs("table",{className:"warehouse-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:S("app.campaign_hub.warehouse_col_record")}),e.jsx("th",{children:S("app.campaign_hub.warehouse_col_id")}),e.jsx("th",{children:S("app.campaign_hub.warehouse_col_name")}),e.jsx("th",{children:S("app.campaign_hub.warehouse_col_source")}),e.jsx("th",{children:S("app.campaign_hub.warehouse_col_hash")}),e.jsx("th",{children:S("app.campaign_hub.warehouse_col_runtime")}),e.jsx("th",{children:S("app.campaign_hub.warehouse_col_reload")}),e.jsx("th",{children:S("app.campaign_hub.warehouse_col_export_gbx")}),e.jsx("th",{children:S("app.campaign_hub.warehouse_col_verify")})]})}),e.jsx("tbody",{children:n.map(v=>e.jsxs("tr",{className:v.systemId===r?"highlight":"",children:[e.jsxs("td",{className:"monospace",children:[v.packRecordId.slice(0,8),"..."]}),e.jsx("td",{children:v.systemId}),e.jsx("td",{children:v.displayName}),e.jsx("td",{children:v.sourceKind==="bundled"?S("app.campaign_hub.warehouse_source_bundled"):S("app.campaign_hub.warehouse_source_zip")}),e.jsx("td",{className:"monospace",children:v.contentHash?`${v.contentHash.slice(0,8)}...`:S("ui.empty_value_placeholder")}),e.jsx("td",{children:v.runtimeLoaded?S("app.campaign_hub.warehouse_runtime_yes"):S("app.campaign_hub.warehouse_runtime_no")}),e.jsx("td",{children:v.sourceKind==="imported_zip"?e.jsx("button",{type:"button",className:"warehouse-verify-btn",disabled:t===v.packRecordId,title:S("app.campaign_hub.warehouse_reload"),"aria-label":S("app.campaign_hub.warehouse_reload"),onClick:()=>void Z(v.packRecordId),children:e.jsx(ms,{size:14,"aria-hidden":!0})}):e.jsx("span",{className:"dim-text",children:S("ui.empty_value_placeholder")})}),e.jsx("td",{children:v.sourceKind==="imported_zip"?e.jsxs("span",{style:{display:"inline-flex",gap:"4px"},children:[e.jsx("button",{type:"button",className:"warehouse-verify-btn","data-testid":`gbx-warehouse-export-plain-${v.systemId}`,disabled:d===v.packRecordId,title:S("app.campaign_hub.warehouse_export_gbx"),"aria-label":S("app.campaign_hub.warehouse_export_gbx"),onClick:()=>void j(v.packRecordId),children:e.jsx(qe,{size:14,"aria-hidden":!0})}),e.jsx("button",{type:"button",className:"warehouse-verify-btn","data-testid":`gbx-warehouse-export-aes-${v.systemId}`,disabled:d===v.packRecordId,title:S("app.campaign_hub.warehouse_export_aes_gbx"),"aria-label":S("app.campaign_hub.warehouse_export_aes_gbx"),onClick:()=>void C(v.packRecordId),children:e.jsx(us,{size:14,"aria-hidden":!0})})]}):e.jsx("span",{className:"dim-text",title:S("app.campaign_hub.warehouse_export_gbx_error.not_imported_zip"),children:S("ui.empty_value_placeholder")})}),e.jsx("td",{children:v.sourceKind==="imported_zip"&&v.contentHash?e.jsx("button",{type:"button",className:"warehouse-verify-btn",disabled:i===v.packRecordId,onClick:()=>D(v.packRecordId),children:i===v.packRecordId?S("app.campaign_hub.warehouse_verify_busy"):S("app.campaign_hub.warehouse_verify")}):e.jsx("span",{className:"dim-text",children:S("ui.empty_value_placeholder")})})]},v.packRecordId))})]})})]})]})},io=({activeStandaloneScenarios:a,deletedStandaloneScenarios:s,showDeletedStandaloneScenarios:n,setShowDeletedStandaloneScenarios:r,handleNewStandaloneScenario:i,setEditingScenarioId:t,setActiveToolId:d,enterWithScenario:b,handleDeleteLibraryScenario:_,handleRestoreLibraryScenario:z,skipToLobby:Z,warehouseOpen:j,setWarehouseOpen:C,handleExportLibrary:D,onImportLibrary:S,handleExportWarehouse:v,onImportWarehouseMerge:R,onImportWarehouseReplace:A,warehouseRows:se,selectedSystemId:k,warehouseVerifyBusyId:y,warehouseReloadBusyId:x,warehouseExportBusyId:w,handleReloadWarehouseFromCache:f,handleExportWarehousePlainGbx:N,handleExportWarehouseAesGbx:W,onVerifyWarehouse:q})=>{const{t:B}=oe();return e.jsxs("div",{className:"desk-panel play-panel scrollable",children:[e.jsx("div",{className:"panel-header",children:e.jsxs("h2",{children:[e.jsx(de,{size:20,style:{marginRight:"6px",display:"inline-block",verticalAlign:"middle"}})," ",B("app.gm_workspace.tool_play")]})}),e.jsxs("div",{className:"play-workspace",children:[e.jsxs("div",{className:"play-launch-split",role:"group","aria-label":B("app.gm_workspace.tool_play"),children:[e.jsxs("button",{type:"button","data-testid":"gbx-gm-create-standalone",className:"desk-action-btn accent-large play-launch-btn",onClick:i,children:[e.jsx(te,{size:16})," ",B("app.gm_workspace.create_standalone_scenario")]}),e.jsxs("div",{className:"play-launch-copy-block",children:[e.jsx("h3",{children:B("app.campaign_hub.standalone_section")}),a.length===0&&s.length===0?e.jsx("p",{className:"empty-text",children:B("app.campaign_hub.empty_standalone")}):e.jsxs("div",{className:"standalone-scenarios-grid",children:[a.map($=>e.jsxs("div",{className:"standalone-scenario-card",children:[e.jsxs("div",{className:"scen-card-body",children:[e.jsx("h4",{"data-testid":`gbx-gm-standalone-title-${$.scenarioLibraryId}`,children:$.title}),$.summary&&e.jsx("p",{className:"scen-desc",children:$.summary})]}),e.jsxs("div",{className:"scenario-row-actions",children:[e.jsxs("button",{type:"button",className:"desk-action-btn","data-testid":`gbx-gm-scenario-edit-${$.scenarioLibraryId}`,onClick:()=>{t($.scenarioLibraryId),d("create")},children:[e.jsx(Ea,{size:14})," ",B("app.gm_workspace.edit_scenario")]}),e.jsxs("button",{type:"button",className:"standalone-play-btn",onClick:()=>void b($),children:[e.jsx(Fe,{size:14})," ",B("app.gm_workspace.play_start_btn")]}),e.jsx("button",{type:"button",className:"gb-icon-btn-compact","data-testid":`gbx-gm-scenario-delete-${$.scenarioLibraryId}`,title:B("app.gm_workspace.delete_scenario"),"aria-label":B("app.gm_workspace.delete_scenario"),onClick:()=>_($),children:e.jsx(pe,{size:14,"aria-hidden":!0})})]})]},$.scenarioLibraryId)),s.length>0?e.jsxs("div",{className:"library-deleted-fold standalone-deleted-fold","data-testid":"gbx-gm-standalone-deleted-fold",children:[e.jsxs("button",{type:"button",className:"library-deleted-fold-toggle","data-testid":"gbx-gm-standalone-deleted-toggle","aria-expanded":n,onClick:()=>r($=>!$),children:[n?e.jsx(Ge,{size:14,"aria-hidden":!0}):e.jsx(ke,{size:14,"aria-hidden":!0}),B("app.gm_workspace.deleted_scenarios_fold",{count:s.length})]}),n?s.map($=>e.jsxs("div",{className:"standalone-scenario-card is-deleted",children:[e.jsxs("div",{className:"scen-card-body",children:[e.jsx("h4",{"data-testid":`gbx-gm-standalone-title-${$.scenarioLibraryId}`,children:$.title}),$.summary&&e.jsx("p",{className:"scen-desc",children:$.summary})]}),e.jsx("div",{className:"scenario-row-actions",children:e.jsx("button",{type:"button",className:"gb-icon-btn-compact","data-testid":`gbx-gm-scenario-restore-${$.scenarioLibraryId}`,title:B("app.gm_workspace.restore_scenario"),"aria-label":B("app.gm_workspace.restore_scenario"),onClick:()=>z($),children:e.jsx($a,{size:14,"aria-hidden":!0})})})]},$.scenarioLibraryId)):null]}):null]})]}),e.jsxs("button",{type:"button","data-testid":"gbx-gm-skip-to-lobby",className:"desk-action-btn accent-large play-launch-btn",onClick:()=>void Z(),children:[e.jsx(Fe,{size:16})," ",B("app.campaign_hub.skip_to_lobby")]}),e.jsxs("div",{className:"play-launch-copy-block",children:[e.jsx("h3",{children:B("app.gm_workspace.skip_to_lobby_title")}),e.jsx("p",{children:B("app.campaign_hub.skip_hint")})]}),e.jsxs("button",{type:"button",className:"desk-action-btn accent-large play-launch-btn","data-testid":"gbx-gm-warehouse-toggle",onClick:()=>C(!j),children:[e.jsx(Fa,{size:16})," ",B(j?"app.campaign_hub.warehouse_hide":"app.campaign_hub.warehouse_show")]}),e.jsxs("div",{className:"play-launch-copy-block",children:[e.jsx("h3",{children:B("app.campaign_hub.warehouse_cloud_title")}),e.jsx("p",{className:"hint-text",children:B("app.campaign_hub.warehouse_hint")})]})]}),e.jsxs("div",{className:"library-io-card",children:[e.jsx("h3",{children:B("app.gm_workspace.library_io_title")}),e.jsx("p",{className:"hint-text",children:B("app.campaign_hub.library_io_hint")}),e.jsxs("div",{className:"library-io-buttons",children:[e.jsxs("button",{type:"button",className:"desk-action-btn",onClick:D,children:[e.jsx(qe,{size:16})," ",B("app.campaign_hub.export_library")]}),e.jsxs("button",{type:"button",className:"desk-action-btn",onClick:S,children:[e.jsx(_e,{size:16})," ",B("app.campaign_hub.import_library")]})]})]}),e.jsx(no,{warehouseOpen:j,setWarehouseOpen:C,warehouseRows:se,selectedSystemId:k,warehouseVerifyBusyId:y,warehouseReloadBusyId:x,warehouseExportBusyId:w,handleExportWarehouse:v,onImportWarehouseMerge:R,onImportWarehouseReplace:A,handleReloadWarehouseFromCache:f,handleExportWarehousePlainGbx:N,handleExportWarehouseAesGbx:W,onVerifyWarehouse:q})]})]})},vo=({initialSystemId:a=null,theme:s,onBack:n,onStartGmSession:r,loadGbxFromFile:i})=>{var xa,ya;const{t}=oe(),[d,b]=I.useState(a),[_,z]=I.useState(null),[Z,j]=I.useState(!0),C=K(o=>o.campaigns),D=K(o=>o.scenarios),S=K(o=>o.createCampaign),v=K(o=>o.addScenarioFromCurrentModule),R=K(o=>o.deleteScenario),A=K(o=>o.restoreScenario),se=K(o=>o.appendCampaignInlinePatch),k=K(o=>o.appendCampaignPackRelative),y=K(o=>o.setCampaignLayerDisabled),x=K(o=>o.setCampaignBasePackRecord),w=X(o=>o.records),[f,N]=I.useState(null),[W,q]=I.useState(null),[B,$]=I.useState(!1),[Ua,Ja]=I.useState(!1),[Ya,re]=I.useState(!1),[ue,ve]=I.useState("json"),[we,Ke]=I.useState(""),[je,We]=I.useState("house"),[He,Ve]=I.useState("{}"),[Ie,Ne]=I.useState(""),[Xa,Qa]=I.useState(!1),[et,Ue]=I.useState(null),[at,ne]=I.useState(null),[tt,ee]=I.useState(null),[st,Je]=I.useState(0),[Q,rt]=I.useState(""),[Ye,ge]=I.useState([]),[ie,ot]=I.useState("2d6"),[Se,Xe]=I.useState(null),Qe=I.useRef(null),ea=I.useRef(null),aa=I.useRef(null),ta=I.useRef(null),sa=I.useRef(null),Re=I.useRef(null),ra=I.useRef(null),be=I.useRef(null),Ce=I.useRef(null),ce=I.useRef(null),le=I.useRef("plain"),he=I.useRef(null),O=J(o=>o.activeModule||o.gameSystem),oa=J(o=>o.loadGameSystem),nt=Ut(o=>o.openRollBuilder),na=Jt(o=>o.myActors);I.useEffect(()=>{d&&(oa(d),z("play"),N(null),q(null),Xe(null))},[d,oa]);const ia=I.useMemo(()=>Yt(),[w]),it=I.useMemo(()=>{const o=new Map;return ss.forEach(c=>{o.set(c.id,{id:c.id,name:c.name,isMock:!0})}),ia.forEach(c=>{o.set(c,{id:c,name:Xt(c)||c,isMock:!1})}),Array.from(o.values())},[ia]),ct=I.useMemo(()=>d?Wr(C,d):[],[C,d]),ca=I.useMemo(()=>d?Hr(D,d):[],[D,d]),F=f?C[f]:null,la=I.useMemo(()=>d?to((F==null?void 0:F.baseSystemId)??d):[],[F==null?void 0:F.baseSystemId,d]),da=I.useMemo(()=>F?Ur(F,D):[],[F,D]),{active:lt,deleted:dt}=I.useMemo(()=>Ra(da),[da]),{active:pt,deleted:mt}=I.useMemo(()=>Ra(ca),[ca]),ut=W?D[W]??null:null,gt=I.useMemo(()=>F?ao(F.baseSystemId):[],[F,w]),bt=I.useMemo(()=>eo(),[w,st]),pa=o=>o.campaignId?C[o.campaignId]??null:null,ma=async(o,c)=>{if(o.systemId!==d)return alert(t("app.campaign_hub.system_mismatch")),!1;if(c){const E=za(c);if(E){const G=`app.campaign_hub.pack_block.${E}`;return alert(t(G)),!1}}const p=await va({systemId:o.systemId,campaign:c,scenarioModule:o.scenarioModule});if(!p)return alert(t("app.campaign_hub.resolve_game_failed")),!1;J.getState().setGameSystem(p);const L=wa(p,o.scenarioModule);return J.getState().setScenario(L),ja(L),!0},ua=async o=>{const c=pa(o);await ma(o,c)&&(await Ia({reason:t("app.campaign_hub.audit_reason_enter_with_scenario")}),r("online"))},ht=async o=>{const c=J.getState().scenario;if(!c||c.id!==o.scenarioModule.id)return;const p=pa(o);await ma(o,p)},ft=async()=>{if(!d)return;const o=J.getState().scenario,c=J.getState().gameSystem,p=f?C[f]??null:null;if(p){const E=za(p);if(E){const G=`app.campaign_hub.pack_block.${E}`;alert(t(G));return}}const L=o||!c?await va({systemId:d,campaign:p,scenarioModule:o}):c;if(!L){alert(t("app.campaign_hub.resolve_game_failed"));return}if(J.getState().setGameSystem(L),o){const E=wa(L,o);J.getState().setScenario(E),ja(E)}await Ia({reason:t("app.campaign_hub.audit_reason_skip_to_lobby")}),r("online")},xt=()=>{Ke(""),We("house"),Ve("{}"),ve("json"),Ne(""),re(!0)},yt=()=>{if(!F||!d)return;if(F.baseSystemId!==d){alert(t("app.campaign_hub.layer_system_mismatch"));return}if(ue==="pack"){if(!Ie.trim()){alert(t("app.campaign_hub.layer_pack_required"));return}k(F.campaignId,{kind:je,label:we,systemId:F.baseSystemId,relativePath:Ie.trim()}),re(!1);return}let o;try{const c=JSON.parse(He);if(!c||typeof c!="object"||Array.isArray(c)){alert(t("app.campaign_hub.layer_json_invalid"));return}o=c}catch{alert(t("app.campaign_hub.layer_json_invalid"));return}se(F.campaignId,{kind:je,label:we,patch:o}),re(!1)},_t=()=>{const o=Yr(),c=new Date().toISOString().slice(0,10);Le.saveAs(new Blob([o],{type:"application/json;charset=utf-8"}),`glassbox-campaign-library-${c}.json`)},kt=async o=>{try{const c=await o.text(),p=Xr(c);if(!p.ok){const L=`app.campaign_hub.import_error.${p.error}`;alert(t(L,{defaultValue:p.error}));return}}catch{alert(t("app.campaign_hub.import_error.parse_error"))}},vt=()=>{const o=is(),c=new Date().toISOString().slice(0,10);Le.saveAs(new Blob([o],{type:"application/json;charset=utf-8"}),`glassbox-pack-warehouse-${c}.json`)},ga=async(o,c)=>{try{const p=await o.text(),L=ns(p,c);if(!L.ok){const E=L.error==="parse_error"||L.error==="invalid_json"?`app.campaign_hub.import_error.${L.error}`:`app.campaign_hub.warehouse_import_error.${L.error}`;alert(t(E,{defaultValue:L.error}));return}}catch{alert(t("app.campaign_hub.import_error.invalid_json"))}},wt=async o=>{const c=Re.current;if(Re.current=null,!!c){Ue(c);try{const p=await es(c,o);if(!p.ok){const L=`app.campaign_hub.warehouse_verify_error.${p.error}`;alert(t(L,{defaultValue:p.error}));return}alert(p.match?t("app.campaign_hub.warehouse_verify_match"):t("app.campaign_hub.warehouse_verify_mismatch"))}catch{alert(t("app.campaign_hub.warehouse_verify_error.parse_error"))}finally{Ue(null)}}},ba=o=>{Je(c=>c+1),alert(t("app.campaign_hub.warehouse_reload_ok",{id:o}))},jt=async o=>{const c=be.current;if(be.current=null,!!c){ne(c);try{const p=await Te(c,{file:o,promptPassphrase:()=>window.prompt(t("app.system_select.gbx_aes_passphrase_prompt"),"")??null});if(!p.ok){if(p.error==="wrong_passphrase"){alert(t("app.system_select.gbx_aes_wrong_passphrase"));return}const L=`app.campaign_hub.warehouse_reload_error.${p.error}`;alert(t(L,{defaultValue:p.error}));return}ba(c)}finally{ne(null)}}},It=async o=>{var c;ne(o);try{const p=await Te(o,{promptPassphrase:()=>window.prompt(t("app.system_select.gbx_aes_passphrase_prompt"),"")??null});if(p.ok){ba(o);return}if(p.error==="cache_miss"){be.current=o,ne(null),(c=ra.current)==null||c.click();return}if(p.error==="wrong_passphrase"){alert(t("app.system_select.gbx_aes_wrong_passphrase"));return}const L=`app.campaign_hub.warehouse_reload_error.${p.error}`;alert(t(L,{defaultValue:p.error}))}finally{ne(null)}},fe=(o,c)=>{const p=o.toLowerCase().endsWith(".aes.gbx")?"application/octet-stream":"application/zip";Le.saveAs(new Blob([c],{type:p}),o),alert(t("app.campaign_hub.warehouse_export_gbx_ok",{file:o}))},Nt=async o=>{const c=ce.current,p=le.current,L=he.current;if(ce.current=null,le.current="plain",he.current=null,!!c){ee(c);try{const E=await o.arrayBuffer(),G=p==="aes"&&L?await De(c,{file:o,passphrase:L}):await Te(c,{file:o,promptPassphrase:()=>window.prompt(t("app.system_select.gbx_aes_passphrase_prompt"),"")??null});if(!G.ok){if(G.error==="wrong_passphrase"){alert(t("app.system_select.gbx_aes_wrong_passphrase"));return}const U=`app.campaign_hub.warehouse_reload_error.${G.error}`;alert(t(U,{defaultValue:G.error}));return}if(Je(U=>U+1),p==="aes"){if(!L){alert(t("app.campaign_hub.warehouse_export_gbx_error.empty_passphrase"));return}const U=await Ca(c,L,{buffer:E});if(!U.ok){const Lt=`app.campaign_hub.warehouse_export_gbx_error.${U.error}`;alert(t(Lt,{defaultValue:U.error}));return}fe(U.fileName,U.buffer);return}const ae=await Oe(c,{buffer:E});if(!ae.ok){const U=`app.campaign_hub.warehouse_export_gbx_error.${ae.error}`;alert(t(U,{defaultValue:ae.error}));return}fe(ae.fileName,ae.buffer)}finally{ee(null)}}},St=async o=>{var c;ee(o);try{const p=await Oe(o);if(p.ok){fe(p.fileName,p.buffer);return}if(p.error==="cache_miss"){le.current="plain",ce.current=o,ee(null),(c=Ce.current)==null||c.click();return}const L=`app.campaign_hub.warehouse_export_gbx_error.${p.error}`;alert(t(L,{defaultValue:p.error}))}finally{ee(null)}},Rt=async o=>{var p,L;const c=((p=window.prompt(t("app.campaign_hub.warehouse_export_aes_passphrase_prompt"),""))==null?void 0:p.trim())??"";if(c){ee(o);try{const E=await Ca(o,c);if(E.ok){fe(E.fileName,E.buffer);return}if(E.error==="cache_miss"){le.current="aes",he.current=c,ce.current=o,ee(null),(L=Ce.current)==null||L.click();return}const G=`app.campaign_hub.warehouse_export_gbx_error.${E.error}`;alert(t(G,{defaultValue:E.error}))}finally{ee(null)}}},ze=o=>{var c;return((c=window.prompt(t(o),""))==null?void 0:c.trim())??""},Ct=()=>{if(!d)return;const o=ze("app.campaign_hub.prompt_campaign_title");o&&S(d,o)},zt=()=>{if(!d)return;const o=ze("app.campaign_hub.prompt_scenario_title");if(!o)return;v({systemId:d,campaignId:null,title:o})||alert(t("app.campaign_hub.no_loaded_scenario"))},Pt=o=>{if(!d)return;const c=ze("app.campaign_hub.prompt_scenario_title");if(!c)return;v({systemId:d,campaignId:o,title:c})||alert(t("app.campaign_hub.no_loaded_scenario"))},ha=o=>{window.confirm(t("app.gm_workspace.delete_scenario_confirm",{title:o.title}))&&(R(o.scenarioLibraryId),W===o.scenarioLibraryId&&q(null))},fa=o=>{A(o.scenarioLibraryId)},At=()=>{try{const o=ie.match(/(\d+)d(\d+)/i);if(o){const c=parseInt(o[1],10),p=parseInt(o[2],10);let L=0;const E=[];for(let G=0;G<c;G++){const ae=as(p);E.push(ae),L+=ae}ge(G=>[t("app.gm_workspace.sandbox_log_roll",{formula:ie,rolls:E.join(", "),sum:L}),...G])}else{const c=parseInt(ie,10);isNaN(c)?ge(p=>[t("app.gm_workspace.sandbox_log_invalid",{formula:ie}),...p]):ge(p=>[t("app.gm_workspace.sandbox_log_const",{value:c}),...p])}}catch(o){ge(c=>[t("app.gm_workspace.sandbox_log_error",{message:String(o)}),...c])}},Pe=I.useMemo(()=>{const o=(O==null?void 0:O.packages)||[];if(!Q)return o;const c=Q.toLowerCase();return o.filter(p=>p.name.toLowerCase().includes(c)||p.id.toLowerCase().includes(c))},[O,Q]),Ae=I.useMemo(()=>{const o=(O==null?void 0:O.traits)||[];if(!Q)return o;const c=Q.toLowerCase();return o.filter(p=>p.name.toLowerCase().includes(c)||p.id.toLowerCase().includes(c)||p.description.toLowerCase().includes(c))},[O,Q]),Me=I.useMemo(()=>{const o=(O==null?void 0:O.equipments)||[];if(!Q)return o;const c=Q.toLowerCase();return o.filter(p=>p.name.toLowerCase().includes(c)||p.id.toLowerCase().includes(c)||p.description.toLowerCase().includes(c))},[O,Q]),Mt=I.useMemo(()=>{const o=rs.map(p=>({id:p.id,name:p.name,color:p.color,isMock:!0}));return[...Object.values(na).map(p=>({id:p.id,name:p.name,color:p.color,isMock:!1})),...o]},[na]);return e.jsxs("div",{className:"workspace-screen",style:{fontFamily:((xa=s.assets)==null?void 0:xa.fontFamily)||"sans-serif"},children:[e.jsx("input",{ref:Qe,type:"file",accept:".zip,.gbx,application/zip",style:{display:"none"},"data-testid":"gbx-gm-load-gbx-input",onChange:async o=>{var L;const c=(L=o.target.files)==null?void 0:L[0];if(o.target.value="",!c)return;const p=await Qt(c,i,()=>window.prompt(t("app.system_select.gbx_aes_passphrase_prompt"),"")??null);if(!p.ok){if(p.reason==="cancelled")return;if(p.reason==="wrong_passphrase"){alert(t("app.system_select.gbx_aes_wrong_passphrase"));return}alert(t("app.system_select.gbx_load_error"));return}b(p.systemId)}}),e.jsx("input",{ref:ea,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:o=>{var p;const c=(p=o.target.files)==null?void 0:p[0];o.target.value="",c&&kt(c)}}),e.jsx("input",{ref:aa,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:o=>{var p;const c=(p=o.target.files)==null?void 0:p[0];o.target.value="",c&&ga(c,"merge")}}),e.jsx("input",{ref:ta,type:"file",accept:"application/json,.json",style:{display:"none"},onChange:o=>{var p;const c=(p=o.target.files)==null?void 0:p[0];o.target.value="",c&&ga(c,"replace")}}),e.jsx("input",{ref:sa,type:"file",accept:".zip,.gbx,application/zip,application/x-zip-compressed",style:{display:"none"},onChange:o=>{var p;const c=(p=o.target.files)==null?void 0:p[0];o.target.value="",c&&wt(c)}}),e.jsx("input",{ref:ra,type:"file",accept:".zip,.gbx,application/zip,application/x-zip-compressed",style:{display:"none"},onChange:o=>{var p;const c=(p=o.target.files)==null?void 0:p[0];if(o.target.value="",!c){be.current=null;return}jt(c)}}),e.jsx("input",{ref:Ce,type:"file",accept:".zip,.gbx,application/zip,application/x-zip-compressed",style:{display:"none"},onChange:o=>{var p;const c=(p=o.target.files)==null?void 0:p[0];if(o.target.value="",!c){ce.current=null,le.current="plain",he.current=null;return}Nt(c)}}),e.jsxs("header",{className:"workspace-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsx("button",{type:"button",className:"icon-nav-btn back-btn",onClick:n,title:t("app.menu.leave_room"),children:e.jsx(Ba,{size:20})}),e.jsx("span",{className:"brand-logo",children:t("app_title")}),e.jsxs("span",{className:"badge-role",children:[e.jsx(gs,{size:12,style:{marginRight:"4px"}}),t("app.gm_workspace.role_title")]})]}),e.jsx("div",{className:"header-right",children:e.jsx("button",{type:"button",className:"mobile-menu-toggle",onClick:()=>j(!Z),children:e.jsx(bs,{size:20})})})]}),e.jsxs("main",{className:"workspace-split-container",children:[e.jsx("section",{className:`workspace-left-shelf ${Z?"open":"closed"}`,children:e.jsxs("div",{className:"shelf-scroll-area",children:[e.jsxs("h3",{className:"shelf-section-title","data-testid":"gbx-gm-bookshelf",children:[e.jsx(hs,{size:14,style:{marginRight:"6px"}}),t("app.gm_workspace.bookshelf_title")]}),e.jsx("div",{className:"books-list",children:it.map(o=>{const c=d===o.id;return e.jsxs("div",{className:`book-container ${c?"active":""}`,children:[e.jsxs("button",{type:"button",className:"book-spine-btn","data-testid":`gbx-gm-system-${o.id}`,onClick:()=>{b(o.id),j(!1)},children:[e.jsx("div",{className:"book-color-bar",style:{background:c?"var(--theme-primary)":"var(--gb-border-dark)"}}),e.jsxs("div",{className:"book-spine-info",children:[e.jsx("span",{className:"book-title",children:o.name}),o.isMock&&e.jsx("span",{className:"book-badge-mock",children:t("app.gm_workspace.mock_badge")})]}),c?e.jsx(Ge,{size:16}):e.jsx(ke,{size:16})]}),c&&e.jsxs("div",{className:"book-drawers-accordion",children:[e.jsxs("button",{type:"button","data-testid":"gbx-gm-tool-play",className:`drawer-tab-btn ${_==="play"?"selected":""}`,onClick:()=>z("play"),children:[e.jsx(de,{size:14,style:{marginRight:"6px",display:"inline-block",verticalAlign:"middle"}}),t("app.gm_workspace.tool_play")]}),e.jsxs("button",{type:"button",className:`drawer-tab-btn ${_==="read"?"selected":""}`,onClick:()=>z("read"),children:[e.jsx(Ze,{size:14,style:{marginRight:"6px",display:"inline-block",verticalAlign:"middle"}}),t("app.gm_workspace.tool_read")]}),e.jsxs("button",{type:"button","data-testid":"gbx-gm-tool-create",className:`drawer-tab-btn ${_==="create"?"selected":""}`,onClick:()=>z("create"),children:[e.jsx(Ta,{size:14,style:{marginRight:"6px",display:"inline-block",verticalAlign:"middle"}}),t("app.gm_workspace.tool_create")]}),e.jsxs("button",{type:"button",className:`drawer-tab-btn ${_==="cabinet"?"selected":""}`,onClick:()=>z("cabinet"),children:[e.jsx(Be,{size:14,style:{marginRight:"6px",display:"inline-block",verticalAlign:"middle"}}),t("app.gm_workspace.tool_cabinet")]})]})]},o.id)})}),e.jsx("div",{className:"shelf-bottom-actions",children:e.jsxs("button",{type:"button",className:"shelf-action-btn","data-testid":"gbx-gm-load-gbx",onClick:()=>{var o;return(o=Qe.current)==null?void 0:o.click()},children:[e.jsx(_e,{size:16})," ",t("app.system_select.load_gbx")]})})]})}),e.jsx("section",{className:"workspace-right-desk",children:!d||!_?e.jsxs("div",{className:"desk-placeholder",children:[e.jsx(Ze,{size:48,className:"placeholder-icon"}),e.jsx("h2",{children:t("app.gm_workspace.select_system_prompt_title")}),e.jsx("p",{children:t("app.gm_workspace.select_system_prompt_desc")})]}):e.jsxs("div",{className:"desk-work-area",children:[_==="read"&&e.jsxs("div",{className:"desk-panel inspect-panel",children:[e.jsxs("div",{className:"panel-header",children:[e.jsxs("h2",{children:[e.jsx(Ze,{size:20,style:{marginRight:"6px",display:"inline-block",verticalAlign:"middle"}})," ",t("app.gm_workspace.tool_read")," - ",((ya=O==null?void 0:O.manifest)==null?void 0:ya.name)??d]}),e.jsxs("div",{className:"search-bar-container",children:[e.jsx(fs,{size:16,className:"search-icon"}),e.jsx("input",{type:"text",placeholder:t("app.gm_workspace.search_rules_placeholder"),value:Q,onChange:o=>rt(o.target.value)})]})]}),e.jsxs("div",{className:"panel-content-split",children:[e.jsxs("div",{className:"master-browser-column scrollable",children:[e.jsxs("div",{className:"master-section",children:[e.jsxs("h3",{children:[t("app.gm_workspace.skill_packages")," (",Pe.length,")"]}),e.jsxs("div",{className:"master-grid",children:[Pe.map(o=>e.jsxs("div",{className:"master-card pkg",children:[e.jsx("span",{className:"card-title",children:o.name}),e.jsx("span",{className:"card-sub",children:t("app.character_sheet.formula_label",{formula:o.baseFormula})}),e.jsxs("button",{type:"button",className:"try-roll-btn",onClick:()=>nt("sandbox","GM",o.name,"2d6",0),children:[e.jsx(de,{size:12})," ",t("app.gm_workspace.test_btn")]})]},o.id)),Pe.length===0&&e.jsx("p",{className:"empty-text",children:t("app.library.not_found")})]})]}),e.jsxs("div",{className:"master-section",children:[e.jsxs("h3",{children:[t("app.gm_workspace.traits_and_feats")," (",Ae.length,")"]}),e.jsxs("div",{className:"master-grid",children:[Ae.map(o=>{var c;return e.jsxs("div",{className:"master-card trait",children:[e.jsxs("div",{className:"card-header-row",children:[e.jsx("span",{className:"card-title",children:o.name}),e.jsx("span",{className:"card-category-badge",children:o.category})]}),e.jsx("p",{className:"card-desc",children:o.description}),((c=o.acquisition)==null?void 0:c.prerequisites)&&e.jsxs("span",{className:"card-sub",children:[t("app.gm_workspace.prerequisites_label"),o.acquisition.prerequisites.join(", ")]})]},o.id)}),Ae.length===0&&e.jsx("p",{className:"empty-text",children:t("app.library.not_found")})]})]}),e.jsxs("div",{className:"master-section",children:[e.jsxs("h3",{children:[t("app.gm_workspace.items_and_equipments")," (",Me.length,")"]}),e.jsxs("div",{className:"master-grid",children:[Me.map(o=>e.jsxs("div",{className:"master-card eq",children:[e.jsxs("div",{className:"card-header-row",children:[e.jsx("span",{className:"card-title",children:o.name}),e.jsx("span",{className:"card-price",children:o.price?`${o.price} G`:t("app.gm_workspace.price_non_defined")})]}),e.jsx("p",{className:"card-desc",children:o.description}),e.jsxs("span",{className:"card-sub",children:[t("app.gm_workspace.category_label"),o.category]})]},o.id)),Me.length===0&&e.jsx("p",{className:"empty-text",children:t("app.library.not_found")})]})]})]}),e.jsxs("div",{className:"sandbox-column",children:[e.jsxs("h3",{children:[e.jsx(de,{size:16,style:{marginRight:"6px",display:"inline-block",verticalAlign:"middle"}})," ",t("app.gm_workspace.sandbox_title")]}),e.jsx("p",{className:"sandbox-hint",children:t("app.gm_workspace.sandbox_hint")}),e.jsxs("div",{className:"sandbox-input-row",children:[e.jsx("input",{type:"text",value:ie,onChange:o=>ot(o.target.value),placeholder:t("ui.dice_placeholder")}),e.jsxs("button",{type:"button",onClick:At,className:"sandbox-roll-btn",children:[e.jsx(de,{size:14})," ",t("app.gm_workspace.roll_btn")]})]}),e.jsxs("div",{className:"sandbox-logs scrollable",children:[Ye.map((o,c)=>e.jsx("div",{className:"sandbox-log-row",children:o},c)),Ye.length===0&&e.jsx("p",{className:"empty-text",children:t("app.gm_workspace.sandbox_no_logs")})]})]})]})]}),_==="create"&&e.jsx(oo,{editingScenario:ut,onCloseEditingScenario:()=>q(null),onScenarioSaved:ht,openCampaign:F,campaignList:ct,handleNewCampaign:Ct,setOpenCampaignId:N,basePackOptions:gt,activeCampaignScenarios:lt,deletedCampaignScenarios:dt,showDeletedCampaignScenarios:B,setShowDeletedCampaignScenarios:$,setCampaignBasePackRecord:x,setCampaignLayerDisabled:y,openAddLayerModal:xt,handleNewScenarioInCampaign:Pt,setEditingScenarioId:q,enterWithScenario:ua,handleDeleteLibraryScenario:ha,handleRestoreLibraryScenario:fa}),_==="cabinet"&&e.jsxs("div",{className:"desk-panel cabinet-panel",children:[e.jsx("div",{className:"panel-header",children:e.jsxs("h2",{children:[e.jsx(Be,{size:20,style:{marginRight:"6px",display:"inline-block",verticalAlign:"middle"}})," ",t("app.gm_workspace.tool_cabinet")]})}),e.jsxs("div",{className:"panel-content-split",children:[e.jsxs("div",{className:"cabinet-characters-column scrollable",children:[e.jsx("h3",{children:t("app.gm_workspace.character_storage_list")}),e.jsx("div",{className:"cabinet-characters-list",children:Mt.map(o=>{const c=Se===o.id;return e.jsxs("button",{type:"button",className:`cabinet-char-row ${c?"active":""}`,onClick:()=>Xe(o.id),children:[e.jsx("div",{className:"char-avatar-dot",style:{backgroundColor:o.color}}),e.jsxs("div",{className:"char-row-info",children:[e.jsx("span",{className:"char-name",children:o.name}),e.jsx("span",{className:"char-meta",children:o.isMock?t("app.gm_workspace.mock_badge"):t("app.gm_workspace.active_pc_label")})]})]},o.id)})})]}),e.jsx("div",{className:"cabinet-preview-column scrollable",children:Se?e.jsx("div",{className:"cabinet-preview-container",children:e.jsx(os,{actorId:Se})}):e.jsxs("div",{className:"cabinet-preview-placeholder",children:[e.jsx(Be,{size:48,className:"placeholder-icon"}),e.jsx("p",{children:t("app.gm_workspace.character_preview_hint")})]})})]})]}),_==="play"&&e.jsx(io,{activeStandaloneScenarios:pt,deletedStandaloneScenarios:mt,showDeletedStandaloneScenarios:Ua,setShowDeletedStandaloneScenarios:Ja,handleNewStandaloneScenario:zt,setEditingScenarioId:q,setActiveToolId:z,enterWithScenario:ua,handleDeleteLibraryScenario:ha,handleRestoreLibraryScenario:fa,skipToLobby:ft,warehouseOpen:Xa,setWarehouseOpen:Qa,handleExportLibrary:_t,onImportLibrary:()=>{var o;return(o=ea.current)==null?void 0:o.click()},handleExportWarehouse:vt,onImportWarehouseMerge:()=>{var o;return(o=aa.current)==null?void 0:o.click()},onImportWarehouseReplace:()=>{var o;window.confirm(t("app.campaign_hub.warehouse_import_replace_confirm"))&&((o=ta.current)==null||o.click())},warehouseRows:bt,selectedSystemId:d,warehouseVerifyBusyId:et,warehouseReloadBusyId:at,warehouseExportBusyId:tt,handleReloadWarehouseFromCache:It,handleExportWarehousePlainGbx:St,handleExportWarehouseAesGbx:Rt,onVerifyWarehouse:o=>{var c;Re.current=o,(c=sa.current)==null||c.click()}})]})})]}),Ya&&F&&e.jsx("div",{role:"presentation",className:"modal-overlay",onClick:()=>re(!1),onKeyDown:o=>o.key==="Escape"&&re(!1),children:e.jsxs("div",{role:"dialog",className:"workspace-modal scrollable",onClick:o=>o.stopPropagation(),children:[e.jsx("h3",{children:t("app.campaign_hub.layer_modal_title")}),e.jsxs("div",{className:"modal-tabs",children:[e.jsx("button",{type:"button",className:`modal-tab ${ue==="json"?"active":""}`,onClick:()=>ve("json"),children:t("app.campaign_hub.layer_tab_json")}),e.jsx("button",{type:"button",className:`modal-tab ${ue==="pack"?"active":""}`,onClick:()=>{ve("pack"),Ne(o=>o||(la[0]??""))},children:t("app.campaign_hub.layer_tab_pack")})]}),e.jsxs("div",{className:"modal-form-group",children:[e.jsx("label",{htmlFor:"workspace-modal-layer-label",children:t("app.campaign_hub.layer_label")}),e.jsx("input",{id:"workspace-modal-layer-label",type:"text",value:we,onChange:o=>Ke(o.target.value),className:"modal-input"})]}),e.jsxs("div",{className:"modal-form-group",children:[e.jsx("label",{htmlFor:"workspace-modal-layer-kind",children:t("app.campaign_hub.layer_kind")}),e.jsxs("select",{id:"workspace-modal-layer-kind",value:je,onChange:o=>We(o.target.value),className:"modal-select",children:[e.jsx("option",{value:"supplement",children:t("app.campaign_hub.layer_kind_supplement")}),e.jsx("option",{value:"house",children:t("app.campaign_hub.layer_kind_house")})]})]}),ue==="json"?e.jsxs("div",{className:"modal-form-group",children:[e.jsx("label",{htmlFor:"workspace-modal-layer-json",children:t("app.campaign_hub.layer_json")}),e.jsx("textarea",{id:"workspace-modal-layer-json",value:He,onChange:o=>Ve(o.target.value),spellCheck:!1,className:"modal-textarea"}),e.jsx("p",{className:"hint-text",children:t("app.campaign_hub.layer_json_hint")})]}):e.jsxs("div",{className:"modal-form-group",children:[e.jsx("label",{htmlFor:"workspace-modal-layer-pack-file",children:t("app.campaign_hub.layer_pack_file")}),e.jsxs("select",{id:"workspace-modal-layer-pack-file",value:Ie,onChange:o=>Ne(o.target.value),className:"modal-select",children:[e.jsx("option",{value:"",children:t("app.campaign_hub.layer_pack_pick")}),la.map(o=>e.jsx("option",{value:o,children:o},o))]}),e.jsx("p",{className:"hint-text",children:t("app.campaign_hub.layer_pack_hint")})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{type:"button",className:"desk-action-btn",onClick:()=>re(!1),children:t("ui.cancel")}),e.jsx("button",{type:"button",className:"desk-action-btn accent",onClick:yt,children:t("app.campaign_hub.layer_save")})]})]})}),e.jsx("style",{children:`
        .workspace-screen {
          position: fixed;
          inset: 0;
          display: flex;
          flex-direction: column;
          background: var(--gb-bg-base, var(--theme-bg, var(--theme-background)));
          color: var(--gb-text-main, var(--theme-text));
          z-index: 1000;
          overflow: hidden;
        }

        .workspace-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background: color-mix(in srgb, var(--gb-bg-base) 78%, var(--gb-bg-element));
          border-bottom: var(--gb-edge-width) solid var(--gb-border-dark);
          flex-shrink: 0;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .icon-nav-btn {
          background: transparent;
          border: none;
          color: inherit;
          cursor: pointer;
          padding: 0;
          width: var(--gb-touch-compact);
          height: var(--gb-touch-compact);
          min-width: var(--gb-touch-compact);
          min-height: var(--gb-touch-compact);
          border-radius: var(--gb-radius-pill);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .icon-nav-btn:hover {
          background: var(--gb-btn-secondary-hover-bg);
        }

        .brand-logo {
          font-weight: 900;
          font-size: 1.1rem;
          letter-spacing: 0.15em;
          color: var(--theme-primary, #60a5fa);
        }

        .badge-role {
          display: inline-flex;
          align-items: center;
          font-size: 0.72rem;
          font-weight: bold;
          background: rgba(245, 158, 11, 0.15);
          color: #f59e0b;
          border: 1px solid rgba(245, 158, 11, 0.3);
          padding: 2px 8px;
          border-radius: var(--gb-radius-panel);
        }

        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          color: inherit;
          cursor: pointer;
          padding: 0;
          width: var(--gb-touch-compact);
          height: var(--gb-touch-compact);
          min-width: var(--gb-touch-compact);
          min-height: var(--gb-touch-compact);
          border-radius: var(--gb-radius-element);
        }

        .workspace-split-container {
          flex: 1;
          display: flex;
          min-height: 0;
          width: 100%;
        }

        .workspace-left-shelf {
          width: 320px;
          background: color-mix(in srgb, var(--gb-bg-base) 88%, var(--gb-bg-element));
          border-right: var(--gb-edge-width) solid var(--gb-border-dark);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          transition: all 0.2s ease-in-out;
        }

        .shelf-scroll-area {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          scrollbar-width: thin;
        }

        .shelf-section-title {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.6;
          margin: 0;
          display: flex;
          align-items: center;
        }

        .books-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .book-container {
          border-radius: var(--gb-radius-panel);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
          transition: all 0.2s;
        }
        .book-container.active {
          border-color: var(--theme-primary, #60a5fa);
          background: rgba(255, 255, 255, 0.05);
        }

        .book-spine-btn {
          width: 100%;
          display: flex;
          align-items: center;
          background: transparent;
          border: none;
          color: inherit;
          cursor: pointer;
          padding: 12px;
          gap: 10px;
          text-align: left;
        }

        .book-color-bar {
          width: 4px;
          height: 24px;
          border-radius: 2px;
          flex-shrink: 0;
        }

        .book-spine-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .book-title {
          font-weight: bold;
          font-size: 0.9rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .book-badge-mock {
          font-size: 0.65rem;
          opacity: 0.5;
        }

        .book-drawers-accordion {
          display: flex;
          flex-direction: column;
          background: rgba(0, 0, 0, 0.2);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4px;
          gap: 2px;
        }

        .drawer-tab-btn {
          width: 100%;
          background: transparent;
          border: none;
          color: var(--gb-text-main);
          cursor: pointer;
          text-align: left;
          padding: 8px 12px;
          font-size: 0.85rem;
          border-radius: var(--gb-radius-element);
          opacity: 0.85;
          transition: background 0.15s, color 0.15s, opacity 0.15s;
        }
        .drawer-tab-btn:hover {
          background: var(--gb-btn-secondary-hover-bg);
          opacity: 1;
        }
        .drawer-tab-btn.selected {
          background: var(--theme-primary);
          color: var(--theme-primary-text);
          font-weight: bold;
          opacity: 1;
        }

        .shelf-bottom-actions {
          margin-top: auto;
          padding-top: 16px;
          border-top: var(--gb-edge-width) solid var(--gb-border-dark);
        }

        .shelf-action-btn {
          width: 100%;
          background: var(--gb-btn-secondary-bg);
          border: var(--gb-edge-width) dashed var(--gb-btn-secondary-border);
          color: var(--gb-btn-secondary-fg);
          cursor: pointer;
          padding: 10px;
          min-height: var(--gb-touch-target);
          border-radius: var(--gb-radius-element);
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: background 0.15s, border-color 0.15s;
        }
        .shelf-action-btn:hover {
          background: var(--gb-btn-secondary-hover-bg);
          border-color: var(--gb-border-light);
        }

        .workspace-right-desk {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          background: var(--theme-surface, #1e1e2f);
        }

        .desk-placeholder {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px;
          opacity: 0.5;
        }

        .placeholder-icon {
          margin-bottom: 20px;
          color: var(--theme-primary, #60a5fa);
        }

        .desk-placeholder h2 {
          font-size: 1.4rem;
          margin: 0 0 10px 0;
        }

        .desk-placeholder p {
          max-width: 400px;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .desk-work-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .desk-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
          padding: 24px;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .panel-header h2 {
          margin: 0;
          font-size: 1.25rem;
          font-weight: bold;
        }

        .search-bar-container {
          position: relative;
          width: 280px;
        }

        .search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.5;
        }

        .search-bar-container input {
          width: 100%;
          padding: 8px 12px 8px 36px;
          border-radius: var(--gb-radius-pill);
          background: var(--gb-bg-element);
          border: var(--gb-edge-width) solid var(--gb-border-dark);
          color: var(--gb-text-main);
          outline: none;
          font-size: 0.85rem;
          box-sizing: border-box;
          transition: border-color 0.2s;
        }
        .search-bar-container input:focus {
          border-color: var(--theme-primary);
        }

        .panel-content-split {
          flex: 1;
          display: flex;
          gap: 24px;
          min-height: 0;
        }

        .master-browser-column {
          flex: 2;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding-right: 8px;
        }

        .sandbox-column {
          flex: 1;
          background: rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--gb-radius-panel);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-height: 0;
        }

        .sandbox-column h3 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: bold;
        }

        .sandbox-hint {
          font-size: 0.75rem;
          opacity: 0.6;
          margin: 0;
          line-height: 1.4;
        }

        .sandbox-input-row {
          display: flex;
          gap: 8px;
        }

        .sandbox-input-row input {
          flex: 1;
          background: var(--gb-bg-element);
          border: var(--gb-edge-width) solid var(--gb-border-dark);
          color: var(--gb-text-main);
          padding: 8px 12px;
          border-radius: var(--gb-radius-element);
          font-family: monospace;
          outline: none;
          box-sizing: border-box;
        }

        .sandbox-roll-btn {
          background: var(--theme-primary);
          color: var(--theme-primary-text);
          border: none;
          padding: 8px 16px;
          min-height: var(--gb-touch-compact);
          border-radius: var(--gb-radius-element);
          cursor: pointer;
          font-weight: bold;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: filter 0.15s;
        }
        .sandbox-roll-btn:hover {
          filter: brightness(1.08);
        }

        .sandbox-logs {
          flex: 1;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--gb-radius-panel);
          padding: 12px;
          font-family: monospace;
          font-size: 0.8rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .sandbox-log-row {
          padding-bottom: 6px;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.05);
          word-break: break-all;
        }

        .master-section h3 {
          margin: 0 0 12px 0;
          font-size: 0.9rem;
          opacity: 0.6;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .master-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
          margin-bottom: 12px;
        }

        .master-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--gb-radius-panel);
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          position: relative;
        }

        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
        }

        .card-title {
          font-weight: bold;
          font-size: 0.9rem;
        }

        .card-category-badge {
          font-size: 0.65rem;
          background: rgba(255, 255, 255, 0.1);
          padding: 2px 6px;
          border-radius: var(--gb-radius-panel);
          opacity: 0.8;
        }

        .card-sub {
          font-size: 0.72rem;
          opacity: 0.5;
        }

        .card-price {
          font-size: 0.8rem;
          color: #f59e0b;
          font-weight: bold;
        }

        .card-desc {
          font-size: 0.75rem;
          opacity: 0.8;
          margin: 0;
          line-height: 1.4;
        }

        .try-roll-btn {
          align-self: flex-start;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--gb-radius-element);
          padding: 2px 8px;
          font-size: 0.7rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 4px;
          transition: all 0.2s;
        }
        .try-roll-btn:hover {
          background: rgba(16, 185, 129, 0.25);
        }

        .empty-text {
          font-size: 0.8rem;
          opacity: 0.4;
          margin: 0;
        }

        .scrollable {
          overflow-y: auto;
          scrollbar-width: thin;
        }

        /* N5: workspace Primary/Secondary alias (do not rename → action-btn) */
        /* default ≈ .action-btn.secondary ; .accent / .accent-large ≈ .action-btn.primary */
        .desk-action-btn {
          background: var(--gb-btn-secondary-bg);
          border: var(--gb-edge-width) solid var(--gb-btn-secondary-border);
          color: var(--gb-btn-secondary-fg);
          padding: 8px 16px;
          min-height: var(--gb-touch-compact);
          border-radius: var(--gb-radius-element);
          font-size: 0.82rem;
          font-weight: bold;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.15s, border-color 0.15s, filter 0.15s, transform 0.15s;
        }
        .desk-action-btn:hover {
          background: var(--gb-btn-secondary-hover-bg);
          border-color: var(--gb-border-light);
          transform: translateY(-2px);
        }
        .desk-action-btn.accent {
          background: var(--theme-primary);
          border: var(--gb-edge-width) solid var(--theme-primary);
          color: var(--theme-primary-text);
          box-shadow: 0 5px 15px color-mix(in srgb, var(--theme-primary) 38%, transparent);
        }
        .desk-action-btn.accent:hover {
          filter: brightness(1.08);
        }
        .desk-action-btn.accent-large {
          background: var(--theme-primary);
          border: var(--gb-edge-width) solid var(--theme-primary);
          color: var(--theme-primary-text);
          padding: 12px 24px;
          min-height: var(--gb-touch-target);
          font-size: 0.95rem;
          box-shadow: 0 5px 15px color-mix(in srgb, var(--theme-primary) 38%, transparent);
        }
        .desk-action-btn.accent-large:hover {
          filter: brightness(1.08);
        }
        .desk-action-btn.text-only {
          background: transparent;
          border: none;
          padding: 0;
          min-height: auto;
          color: var(--gb-text-main);
          opacity: 0.75;
          box-shadow: none;
        }
        .desk-action-btn.text-only:hover {
          opacity: 1;
          background: transparent;
          filter: none;
          transform: none;
        }

        .section-title-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          gap: 16px;
        }
        .section-title-bar h3 {
          margin: 0;
          font-size: 1rem;
          font-weight: bold;
        }

        .campaign-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
        }

        .campaign-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 16px;
          border-radius: var(--gb-radius-panel);
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .campaign-card:hover {
          border-color: var(--theme-primary, #60a5fa);
          background: rgba(255, 255, 255, 0.06);
        }
        .campaign-card h4 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: bold;
        }
        .campaign-card p {
          margin: 0;
          font-size: 0.75rem;
          opacity: 0.6;
        }

        .open-campaign-link {
          font-size: 0.8rem;
          color: var(--theme-primary, #60a5fa);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 8px;
        }

        .notebook-header {
          margin: 16px 0 24px 0;
        }
        .notebook-header h2 {
          margin: 0 0 4px 0;
          font-size: 1.5rem;
        }
        .notebook-sub-id {
          font-family: monospace;
          font-size: 0.75rem;
          opacity: 0.5;
        }

        .notebook-setting-card {
          background: rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 16px;
          border-radius: var(--gb-radius-panel);
          margin-bottom: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .notebook-setting-card label {
          font-size: 0.85rem;
          font-weight: bold;
        }

        .notebook-select {
          background: var(--gb-bg-element);
          border: var(--gb-edge-width) solid var(--gb-btn-secondary-border);
          color: var(--gb-text-main);
          padding: 8px 12px;
          border-radius: var(--gb-radius-element);
          outline: none;
          font-size: 0.85rem;
        }

        .hint-text {
          margin: 0;
          font-size: 0.72rem;
          opacity: 0.5;
          line-height: 1.4;
        }

        .notebook-layers-section,
        .notebook-scenarios-section {
          margin-bottom: 30px;
        }

        .layers-list,
        .notebook-scenarios-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 12px;
        }

        .layer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 12px 16px;
          border-radius: var(--gb-radius-panel);
          gap: 16px;
        }
        .layer-row.disabled {
          opacity: 0.5;
        }

        .layer-info {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          font-size: 0.85rem;
        }

        .layer-label {
          font-weight: bold;
        }

        .layer-kind {
          font-size: 0.72rem;
          opacity: 0.6;
        }

        .layer-ref-detail {
          font-size: 0.75rem;
          opacity: 0.5;
          font-family: monospace;
        }

        .layer-toggle-switch {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          cursor: pointer;
        }

        .notebook-scenario-row.is-deleted,
        .standalone-scenario-card.is-deleted {
          opacity: 0.65;
        }

        .library-deleted-fold {
          margin-top: 10px;
          width: 100%;
        }

        .library-deleted-fold-toggle {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin: 0 0 8px;
          padding: 6px 8px;
          border: none;
          background: transparent;
          color: var(--theme-text);
          opacity: 0.75;
          font-size: 0.82rem;
          cursor: pointer;
          min-height: var(--gb-touch-compact);
        }

        .standalone-deleted-fold {
          grid-column: 1 / -1;
        }

        .notebook-scenario-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          background: var(--gb-bg-element);
          border: var(--gb-edge-width) solid var(--gb-border-dark);
          padding: 12px 16px;
          border-radius: var(--gb-radius-panel);
          gap: 16px;
        }

        .scenario-row-actions {
          display: flex;
          flex-wrap: nowrap;
          gap: 8px;
          align-items: center;
          justify-content: flex-end;
          flex: 0 0 auto;
        }

        .scenario-row-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1 1 auto;
          min-width: 0;
        }

        .scenario-title {
          font-weight: bold;
          font-size: 0.9rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .scenario-desc {
          font-size: 0.75rem;
          opacity: 0.6;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .notebook-play-btn,
        .standalone-play-btn {
          background: color-mix(in srgb, var(--theme-primary) 18%, var(--gb-bg-element));
          border: var(--gb-edge-width) solid color-mix(in srgb, var(--theme-primary) 55%, transparent);
          color: var(--gb-text-main);
          border-radius: var(--gb-radius-element);
          padding: 6px 14px;
          min-height: var(--gb-touch-compact);
          font-size: 0.8rem;
          font-weight: bold;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
        }
        .notebook-play-btn:hover,
        .standalone-play-btn:hover {
          background: var(--theme-primary);
          border-color: var(--theme-primary);
          color: var(--theme-primary-text);
        }

        .cabinet-characters-column {
          flex: 1;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          padding-right: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cabinet-characters-column h3 {
          margin: 0;
          font-size: 0.95rem;
          opacity: 0.6;
        }

        .cabinet-characters-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cabinet-char-row {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--gb-btn-secondary-bg);
          border: var(--gb-edge-width) solid var(--gb-btn-secondary-border);
          padding: 10px 14px;
          border-radius: var(--gb-radius-panel);
          cursor: pointer;
          text-align: left;
          color: var(--gb-text-main);
          width: 100%;
          box-sizing: border-box;
          transition: background 0.15s, border-color 0.15s;
        }
        .cabinet-char-row:hover {
          background: var(--gb-btn-secondary-hover-bg);
          border-color: var(--gb-border-light);
        }
        .cabinet-char-row.active {
          background: color-mix(in srgb, var(--theme-primary) 18%, var(--gb-bg-element));
          border-color: var(--theme-primary);
        }

        .char-avatar-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .char-row-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .char-name {
          font-weight: bold;
          font-size: 0.85rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .char-meta {
          font-size: 0.68rem;
          opacity: 0.5;
        }

        .cabinet-preview-column {
          flex: 2;
          padding-left: 8px;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .cabinet-preview-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-height: 0;
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--gb-radius-panel);
          overflow: hidden;
        }

        .cabinet-preview-placeholder {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          opacity: 0.4;
          padding: 40px;
          gap: 16px;
        }
        .cabinet-preview-placeholder p {
          max-width: 320px;
          font-size: 0.85rem;
          line-height: 1.5;
          margin: 0;
        }

        .play-workspace {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .play-launch-split {
          display: grid;
          grid-template-columns: minmax(240px, 280px) minmax(0, 1fr);
          align-items: start;
          column-gap: 20px;
          row-gap: 16px;
        }
        .play-launch-btn {
          width: 100%;
          justify-content: flex-start;
          min-height: var(--gb-touch-target);
          align-self: start;
        }
        .play-launch-copy-block {
          min-width: 0;
        }
        .play-launch-copy-block h3 {
          margin: 0 0 6px 0;
          font-size: 1.05rem;
          font-weight: bold;
        }
        .play-launch-copy-block p {
          margin: 0;
          font-size: 0.82rem;
          opacity: 0.8;
          line-height: 1.4;
        }

        .play-direct-lobby-card {
          background: color-mix(in srgb, var(--theme-primary) 12%, transparent);
          border: 1px solid color-mix(in srgb, var(--theme-primary) 28%, transparent);
          padding: 20px;
          border-radius: var(--gb-radius-panel);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .lobby-card-info h3 {
          margin: 0 0 6px 0;
          font-size: 1.05rem;
          font-weight: bold;
        }
        .lobby-card-info p {
          margin: 0;
          font-size: 0.82rem;
          opacity: 0.8;
          line-height: 1.4;
        }

        .library-io-card {
          background: rgba(0, 0, 0, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 16px;
          border-radius: var(--gb-radius-panel);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .library-io-card h3 {
          margin: 0;
          font-size: 0.95rem;
          font-weight: bold;
        }

        .library-io-buttons {
          display: flex;
          gap: 10px;
          margin-top: 4px;
          flex-wrap: wrap;
        }

        .standalone-scenarios-section {
          margin-top: 10px;
        }

        .standalone-scenarios-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 16px;
          margin-top: 12px;
        }

        .standalone-scenario-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--gb-radius-panel);
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
          transition: all 0.2s;
        }
        .standalone-scenario-card:hover {
          border-color: rgba(255, 255, 255, 0.15);
        }

        .scen-card-body h4 {
          margin: 0 0 6px 0;
          font-size: 0.95rem;
          font-weight: bold;
        }
        .scen-card-body .scen-desc {
          margin: 0;
          font-size: 0.78rem;
          opacity: 0.6;
          line-height: 1.45;
        }

        .pack-warehouse-section {
          margin-top: 10px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 20px;
        }

        .warehouse-detail-area {
          background: rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: var(--gb-radius-panel);
          padding: 16px;
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .warehouse-io-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .warehouse-table-container {
          overflow-x: auto;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--gb-radius-panel);
        }

        .warehouse-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.8rem;
          text-align: left;
        }

        .warehouse-table th,
        .warehouse-table td {
          padding: 10px 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .warehouse-table th {
          background: rgba(0, 0, 0, 0.2);
          font-weight: bold;
          opacity: 0.8;
        }

        .warehouse-table tr.highlight {
          background: rgba(96, 165, 250, 0.08);
        }

        .warehouse-table .monospace {
          font-family: monospace;
          font-size: 0.75rem;
        }

        .warehouse-verify-btn {
          background: var(--gb-btn-secondary-bg);
          border: var(--gb-edge-width) solid var(--gb-btn-secondary-border);
          color: var(--gb-btn-secondary-fg);
          padding: 4px 8px;
          min-height: var(--gb-touch-compact-min);
          border-radius: var(--gb-radius-element);
          font-size: 0.72rem;
          cursor: pointer;
          font-weight: bold;
        }
        .warehouse-verify-btn:hover {
          background: var(--gb-btn-secondary-hover-bg);
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .workspace-modal {
          width: 100%;
          max-width: 480px;
          max-height: 85vh;
          background: var(--theme-surface, #1e1e2f);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--gb-radius-panel);
          padding: 20px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .workspace-modal h3 {
          margin: 0;
          font-size: 1.1rem;
          font-weight: bold;
        }

        .modal-tabs {
          display: flex;
          gap: 8px;
          background: rgba(0, 0, 0, 0.2);
          padding: 4px;
          border-radius: var(--gb-radius-element);
        }

        .modal-tab {
          flex: 1;
          background: transparent;
          border: none;
          color: var(--gb-text-main);
          padding: 6px;
          min-height: var(--gb-touch-compact);
          font-size: 0.8rem;
          font-weight: bold;
          border-radius: var(--gb-radius-element);
          cursor: pointer;
          opacity: 0.75;
        }
        .modal-tab.active {
          background: var(--theme-primary);
          color: var(--theme-primary-text);
          opacity: 1;
        }

        .modal-form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .modal-form-group label {
          font-size: 0.8rem;
          font-weight: bold;
          opacity: 0.8;
        }

        .modal-input,
        .modal-select,
        .modal-textarea {
          background: var(--gb-bg-element);
          border: var(--gb-edge-width) solid var(--gb-btn-secondary-border);
          color: var(--gb-text-main);
          padding: 8px 12px;
          border-radius: var(--gb-radius-element);
          outline: none;
          font-size: 0.85rem;
          box-sizing: border-box;
        }
        .modal-input:focus,
        .modal-select:focus,
        .modal-textarea:focus {
          border-color: var(--theme-primary, #60a5fa);
        }

        .modal-textarea {
          min-height: 120px;
          font-family: monospace;
          font-size: 0.8rem;
          resize: vertical;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
          margin-top: 8px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: flex;
          }

          .workspace-split-container {
            position: relative;
          }

          .workspace-left-shelf {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            z-index: 10;
            width: 280px;
            box-shadow: 10px 0 25px rgba(0, 0, 0, 0.5);
          }
          .workspace-left-shelf.closed {
            transform: translateX(-100%);
          }

          .panel-content-split {
            flex-direction: column;
            overflow-y: auto;
          }

          .sandbox-column {
            flex-shrink: 0;
          }

          .play-launch-split {
            grid-template-columns: 1fr;
          }
        }
      `})]})};export{vo as GMWorkspaceScreen};
