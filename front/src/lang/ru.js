export default {
  header: {
    index: 'Главная',
    about: 'О Нас',
    cheaters: 'Читеры',
    report: 'Сообщить',
    signin: 'Войти',
    signup: 'Зарегестрироваться',
    signout: 'Выйти',
    daily: 'BanDaily',
    dashboard: 'Dashboard',
    searchBar: 'Поиск по Origin ID (и предыдущему ID)...',
    searchInfo: 'Результат поиска по ID для: ',
    searchResult: 'Результат поиска:',
    search: 'Поиск',
    none: 'ничего не найдено.',
    signoutSuccess: 'Выход произведён успешно',
  },
  detail:{
    info:{
      viewTimes:'Просмотров',
      reply:'Ответить',
      reportedGames:'В игре:',
      gameScores:'Ссылка на статистику:',
      firstReportTime:'Дата первого репорта:',
      recentUpdateTime:'Последнее время обновления:',
      originAvatar:'Origin аватар:',
      historyID:'ID Истории:',
      dealRecord:'Записи администратора：',
      discription1:'Если не удаётся посетить battlefieldtracker или он сменил Origin ID, нажмите',
      updateButton:'Обновить',
      discription2:'bfban.com может отслеживать новый ID игрока',
      discription3:'server can update hacker who is on the list on schedule',
      discription4:'history ID which they used before can be found too',
      timeLine:'История',
      administrator:'Админ',
      report:'Report',
      inGame:'в',
      gaming:'играет',
      videoLink:'Ссылка на видео',
      judge:'рассудить как',
      cheatMethod:'Чит',
      agreeJudgement:'Подтвердить статус читера',
      agreeWith:'согласен с',
      thisChoice:'Это решение',
      replyManual1:'Если у вас есть новое изображение или видео доказательство необходимое россмотрения, вы можете сообщить ещё раз. Иначе, вы можете ответить только текстом или ссылкой здесь. Если вы хотите ответить изображением, нажмите здесь ',
      uploadPicButton:'Загрузить изображения',
      replyManual2:'и затем скопируйте ссылку на изображение для ответа',
      replyManual3:'Вы должны быть членом BFban чтобы обсудить с нами',
	    appealManual1:'Обжалование бана: Пожалуйста, отправьте ссылку на страницу игрока и оспорьте решение через ban-appeals@bfban.com .',
      adminConsole:'Панель управления',
      adminManual1:'Не судите по своему желанию, если нет доказательств, воспользуйте кнопкой ответа, и подождите доказательства',
      adminManual2:'любое действие администратором может изменить статус игрока，если вы не уверены 100%, пожалуйства, используйте фунцию ответа выше',
      judgement:'Решение',
      choice1:'Подтверждённый хакер',
      choice2:'Подозрительный игрок',
      choice3:'Честный игрок',
      choice4:'Удалить как мусор',
      commit:'Подтверждён',
      replyManual4:'Вы должны войти для ответа',
      action: 'Действие',
      operatingTime: 'Время операции',
      writeSomething: 'апишите что-нибудь',
      giveOpinion: 'Какое ваше мнение?'
    },
    messages: {
      fillEverything: 'Please fill in everything',
      replySuccess: 'Your reply was successfully added',
      signIn: 'Please sign in',
      updateComplete: 'Update completed',
      submitSuccess: 'Submitted successfully',
      changeHacker: 'The current person is in confirmed hacker state, are you sure you want to change it to {code} status?',
    },
  },
  report:{
	  info:{
	  	reportHacker:'Report a hacker',
	  	reportNews:'We offer the function to report BFV hackers！',
	  	bf1:'battlefield 1',
	  	bfv:'battlefield 5',
		bf6:'battlefield 6',
	  	idNotion1:'You can only report one ID one time，do not write the platoon name，do not write your ID',
	  	idNotion2:'Origin ID has no match for lower case and upper case，but you must identify i I 1 l L o O 0，offer correct ID',
	  	uploadManual1:'if you do not want to register video site member such as Bilibili and Youtube,you can go to',
	  	uploadManual2:'and then paste the video link below',
	  	uploadManual3:'you can offer your video by Bilibili,Youtube,Youku,Tudou and more',
	  	uploadPic1:'We recommend you to upload those types of screenshot such as png, jpg, jpeg, gif',
	  	uploadPic2:'picture which is larger than 2M would upload failed,you can go to ',
	  	uploadPic3:'and then choose Image URL Tag，paste the image link below',
	  	uploadPic4:'please make a discription for this hacker with evidence，Text editor offer image upload service（Size limits:2M）',
	  	getCaptcha:'Get Captcha',
	  	report:'Report',
      description: 'List as much evidence as possible about the reported person',
      captcha: 'Captcha',
      required: 'Required',
      onlyOneId: 'Only one origin ID at a time',
	  },
    labels: {
      cheatMethod: 'Cheat method',
      hackerId: 'Hacker\'s ID',
      game: 'Game',
      description: 'Description',
    },
    error: {
      mediaEvidence: 'Please upload a picture or fill in the video link',
      originId: 'Origin ID does not exist, please check spelling',
      success: 'Submitted successfully',
    }
  },
  footer: {
    author: 'Written by mygoare',
    feedback: 'Give feedback'
  },
  home: {
    activity: {
      title: 'Activity',
      description: 'bfban.com was made on the 4th of november 2018 and received <b>{report}</b> reports, and has a total of <b>{cheater}</b> banned hackers. Thanks for the hard work everyone!',
      activities: {
        report: 'reported',
        join: 'registered to bfban, welcome!',
        admin: 'Administrator',
        mark: 'marked',
        as: 'as'
      }
    },
    howToUse: {
      title: 'How to use',
      description: `<a href="https://bfban.com">This site</a> can <b>permanently track</b> a player\'s id, and we also support <b>searching of the id history!</b> Everyone is welcome to report hackers.
      <p>if there is a hacker you can:</p>
      <p>1. Use <a target="_blank" href="https://bf1.mygoare.com/">the bf1 report assistance</a> to report hacker to dice</p>
      <p>2. <router-link :to="{path: 'signup'}">Register on the website</router-link> and <router-link :to="{path: 'report'}">report on bfban</router-link></p>
      <p>3. The user id will be recorded. even if he changes his id, we can still find him</p>`,
      tools: {
        main: 'Tools',
        name: {
          report: '[Recommended] Battlefield 1 plug-in report assistant',
          tracker: '[Recommended] Battlefield PC/mobile record quick check tool',
          tools: 'Battlefield related tools',
          bfban: '[Recommended] BFBAN APP',
          apiGametools: 'api.gametools.network',
          botGametools: 'top.gg/bot/714524944783900794',
          serverManager: 'manager.gametools.network',
        },
        description: {
          bftracker: 'Online record query website, you can query various data in detail',
          report: 'Generate report text online',
          fairplay: 'quickly check if the player is already banned in bf3 and bf4',
          tracker: 'At the same time, it supports quick query of record and mark on computer and mobile phone',
          tools: 'Tools to help you solve game platform problems',
          bfban: 'BFBAN mobile client',
          apiGametools: 'Public api for the Battlefield series',
          botGametools: 'Discord stats bot for the Battlefield series',
          serverManager: 'BF1 servermanager, this tool can also autokick people marked as hacker within bfban.com',
        }
      },
      qqGroup: 'QQ group/Discord',
      bfbanQq: 'Contact BFBan QQ/Community network discord for ban appeals',
      gameTogether: 'Game Together',
    },
    bulletin: {
      title: 'Информация',
      webDev: 'Веб разработчик',
      bfbanAppD: 'Скачать приложение BFBAN',
      japCon: 'Переводчик на Японский',
      engCon: 'Переводчик на Ангийский',
	    lanCon: 'Другие переводчики',
	    localManager: 'Управление серверами BF1',
      domCost: 'Оплата домена',
    }
  },
  about: {
    title: 'О нас',
    description: `<h2>BFBAN</h2>
    <p>
    Международная организация BFBan основана 1 Января 2018 года <b>для противостояния хакерам</b>, создания общёй базы читеров, а так же разработке средств противодействия хакерам
    </p>

    <p>
      Состав управления bfban включает:
    </p>
    <ul style="padding: .5rem 1rem .5rem;">
      <li>Владельцев серверов</li>
      <li>Лидеров кланов</li>
      <li>Bf1 стримеров</li>
    </ul>`,
    clanInfo: `
    <p>
      <b>На данный момент всего {clans} кланов присоединились: </b>
      (Ищите <b>LB</b> чтобы найти сервера присоеденившиеся bfban)
    </p>`,
    website: `
    <h2>Сайт bfban.com</h2>
    <p>
      <a href="https://bfban.com">bfban.com</a>  основывается на Бюро Расследований bfban, изначально идея была предложена интузиастами и игроками Bdttlefield, разработана <a target="_blank" href="https://mygoare.com">mygoare</a> И запущена 4 Ноября 2018
    </p>
    <p>Bfban в основном создан для сообщения о читерах и обсуждение.</p>`,
    contact: `
    <h2>Обжалование бана</h2>
    <p>Пожалуйста, отправьте ссылку на страницу игрока и оспорьте решение через ban-appeals@bfban.com .</p>
    <br/>
    <h2>Связь с нами</h2>
    <p>
      <a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=-5GQjZqPk4bOv52ZnZ6R0ZyQkg">
        Почта для претензий
      </a>
    </p>
    <p>
      <a target="_blank" href="https://support.qq.com/products/64038">
        Предложения
      </a>
    </p>`
  },
  reset: {
    title: 'Обновить пароль',
    form: {
      qq: 'QQ',
      password: 'Новый пароль',
      passwordRepeat: 'Подтвердите пароль',
      submit: 'Обновить',
    },
  },
  account: {
    title: 'User info',
    hint1: 'We dont have a message system yet, but you can use this menu to see the status of your reports.',
    hint2: 'Everyone can post responses on the report page.',
    hint3: 'If you have more evidence for a hacker, please report the same id twice.',
    userInfo: 'Account info',
    username: 'Username:',
    role: 'Role:',
    admin: 'Administrator',
    normal: 'Normal user',
    super: 'Super admin',
    joinedAt: 'Joined at:',
    reports: 'Personal reports',
    noReports: 'No reports yet',
    reported: 'Reported',
    status: 'Status',
    recentlyUpdated: 'last updated',
  },
  notFound: 'if you can’t find the history log use the “search” on the top of the webpage. History id tracking is supported',
  signin: {
    title: 'Вход в систему',
    form: {
      username: 'Имя пользователя',
      password: 'Пароль',
      captcha: 'Капча',
      getCaptcha: 'Получить новую капчу',
      submit: 'Войти',
      submitHint: 'Ещё нет аккаунта? Зарегистрируйтесь',
    },
    failed: 'Неправильные данные входа',
    success: 'успешный вход',
    loginFirst: 'Сначала войдите',
  },
  signup: {
    title: 'Зарегистрируйтесь',
    form: {
      username: 'Имя пользователя',
      password: 'Пароль',
      originId: 'Никнейм',
      qq: 'QQ',
      captcha: 'Капча',
      getCaptcha: 'Получить новую капчу',
      submit: 'Зарегистрироваться',
      submitHint: 'Есть аккаунт? Войдите',
    },
    placeholder: {
      username: 'Больше 4 символов',
      password: 'Больше 6 символов',
      originId: 'необязательно',
      qq: 'необязательно',
    },
    fillIn: 'Please fill the form',
    failed: 'Регистрация не удалась',
  },
  list: {
    title: 'Список читеров',
    filters: {
      game: {
        bf1: 'BF1',
		    bf1: 'BF6',
        bfv: 'BFV',
      },
      status: {
        all: 'всё',
      },
      refresh: 'обновить',
    },
    reportTime: 'Report time range',
    updateTime: 'Update time range',
    colums: {
      playerId: 'Никнейм',
      reportTime: 'Время добавления',
      updateTime: 'Последние обновление'
    } 
  },
  cheatMethods: {
    stealth: 'Стелс',
    wallhack: 'Валхак',
    aimbot: 'Аимбот',
    oneShotKill: 'Убийство в 1 выстрел',
    gadgetModify: 'Модификация гаджета',
    damageChange: 'Изменённый дамаг',
    shootingThroughWalls: 'Пули через стены',
  },
  misc: {
    uploadImage: {
      info: 'Загрузите изображения, не больше 2MB',
      mobile: 'Кликните два раза для загрузки...',
      desktop: 'Нажмите или перетащите для загрузки...',
      fail: 'Превышен лимит по размеру в 2MB',
    },
    uploadVideo: {
      info: 'Загрузите видео, не больше 30MB',
      desktop: 'Нажмите или перетащите для загрузки',
    },
    progress: 'загружаем...',
  },
};
