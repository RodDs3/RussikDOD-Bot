const ownerNumber = ["5804167287924@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '5804167287924' 
// mude para seu numero

const gimagenotregister = true
// quando não há comando registrado o bot procura no google image

const sgooglenotregister = true
// quando não há comando registrado o bot procura uma pesquisa no google

const msgwelcomeimg = (numero, groupname) => {
    return `Sea bienvenido ${numero}\n\nEscribe ${prefix}menu para ver la lista de comandos`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Se salio ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname) => {
    return `Sea bienvenido ${numero}\n\nAl menu de Russik-bot`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = 'api key do imgbb, crie sua conta e pegue a key'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = 'Russik-Bot/n' 
// texto do simbolo de verificado

const prefix = 'r!' 
// prefixo

const blockedmsg = '*😜 Tu número está bloqueado, es decir, no te escucho 😜*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando esta bloqueado contacte con el propietario del bot para saber porque🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Adios zorra por andar spameando*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Tu eres admin asi que...*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Hmmm pornito con antiporn activado, ya sabe qué...'
// mensagem de ban no antiporn

const adminmsgporn = '*Tu eres admin entonses no te voy a sacar por mandar porn*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Usted sera eliminado'
// mensagem de ban no antilink

const adminmsglink = 'Eso es un link amigo... ah tu éres admi entonces puedes jajaaj 🙃'
// mensagem de quando adm manda link

const adminmsgpalavra = 'Eso esta en la lista de palabras prohibidas'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Palabra prohibida? ya sabe que...'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'Ohayo gozaimasu, Onii-chan 👉👈'
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `Kon'nichiwa Onii-chan, aceite ese café ☕`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'Konbanwa Onii-chan, espero que tenga un buen dia☺️'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Error intente nuevamente:/'
// mensagem de erro

const notregister = `*Comando no registrado, escriba ${prefix}menu para ver la lista de comandos*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'Bakaaaa 😣😣'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeo = 'Tu pareces una papaya 😡'
const cadebot = 'Me llamo onii-chan 👉👈?'
const botfdp = 'ª'
const botsabroso = 'Arigato go sai masu 😳👉👈'
const botfofo = 'Arigato go sai masu 😳👉👈'
const botbaianor = 'A'
const botcorno = 'Calla jugador de free fire'
const botputa = 'Tu mamá😡'
const botgay = 'Dios me libre de tener esa enfermedad 🥵'
const botviado = 'ª '
const numbotfeo = 'tu madre 😡'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Espere un poco... ⌛',
    success: '✔️ Listo! ✔️',
    error: {
        stick: '❌ A Ocurrio un error al convertir la imagen ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando solo puede ser usados en grupos! ❌',
        ownerG: '❌ Este comando solo puede ser usado por el dueño del grupo! ❌',
        ownerB: '❌ Este comando sólo puede ser usado por el owner del bot! ❌',
        admin: '❌ Usted no tiene permiso para usar este comando❌',
        Badmin: '❌ Este comando solo puede ser usado si hace administrador a el bot! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:1.0\n' 
+ 'FN:Mi creador^~^\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=5804167287924:+58 0416 728 7924\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeo = botfeo
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botsabroso = botsabroso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeo = numbotfeo
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber
