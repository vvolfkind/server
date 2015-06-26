OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Не удалось очистить соответствия.",
    "Failed to delete the server configuration" : "Не удалось удалить конфигурацию сервера",
    "The configuration is invalid: anonymous bind is not allowed." : "Некорректная конфигурация: анонимная связь не разрешается.",
    "The configuration is valid and the connection could be established!" : "Конфигурация корректна и подключение может быть установлено!",
    "The configuration is valid, but the Bind failed. Please check the server settings and credentials." : "Конфигурация корректна, но операция подключения завершилась неудачно. Проверьте настройки сервера и учетные данные.",
    "The configuration is invalid. Please have a look at the logs for further details." : "Конфигурация некорректна. Проверьте журналы для уточнения деталей.",
    "No action specified" : "Действие не указано",
    "No configuration specified" : "Конфигурация не создана",
    "No data specified" : "Нет данных",
    " Could not set configuration %s" : "Невозможно создать конфигурацию %s",
    "Action does not exist" : "Действия не существует",
    "The Base DN appears to be wrong" : "База поиска DN по всей видимости указана неправильно",
    "Configuration incorrect" : "Конфигурация некорректна",
    "Configuration incomplete" : "Конфигурация не завершена",
    "Configuration OK" : "Конфигурация в порядке",
    "Select groups" : "Выберите группы",
    "Select object classes" : "Выберите объектные классы",
    "Please check the credentials, they seem to be wrong." : "Пожалуйста проверьте учетный данные, возможно они не верны.",
    "Please specify the port, it could not be auto-detected." : "Пожалуйста укажите порт, он не может быть определен автоматически.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "База поиска не может быть определена автоматически, пожалуйста перепроверьте учетные данные, адрес и порт.",
    "Could not detect Base DN, please enter it manually." : "Не возможно обнаружить Base DN, пожалуйста задайте в ручную.",
    "{nthServer}. Server" : "Сервер {nthServer}.",
    "No object found in the given Base DN. Please revise." : "Не найдено объектов в Base DN. Пожалуйста перепроверьте.",
    "More than 1.000 directory entries available." : "В каталоге доступно более 1.000 записей.",
    " entries available within the provided Base DN" : "элементы доступные в Базе",
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Произошла ошибка. Пожалуйста проверьте базу поиска DN, а также настройки подключения и учетные данные.",
    "Do you really want to delete the current Server Configuration?" : "Вы действительно хотите удалить существующую конфигурацию сервера?",
    "Confirm Deletion" : "Подтверждение удаления",
    "Mappings cleared successfully!" : "Соответствия успешно очищены!",
    "Error while clearing the mappings." : "Ошибка при очистке соответствий.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Анонимная связь не разрешается. Пожалуйста укажите DN пользователя и пароль.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Ошибка операций LDAP. Возможно анонимная связь не разрешена.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Не удается произвести сохранение. Пожалуйста убедитесь, что база данных функционирует. Перезагрузитесь перед продолжением.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Переключение режима задействует автоматические запросы LDAP. В зависимости от размера LDAP это может занять много времени. Вы все еще желаете переключить режим?",
    "Mode switch" : "Переключение режима",
    "Select attributes" : "Выберите атрибуты",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command line validation): <br/>" : "Пользователь не найден. Пожалуйста проверьте учетные данные. Применяемый фильтр (для проверки в командой строке): <br/>",
    "User found and settings verified." : "Пользователь найден и настройки проверены.",
    "Settings verified, but one user found. Only the first will be able to login. Consider a more narrow filter." : "Настройки проверены, но найден один пользователь. Только первый сможет войти. Советуем пересмотреть фильтр.",
    "An unspecified error occurred. Please check the settings and the log." : "Произошла неуказанная ошибка. Пожалуйста проверьте настройки и журнал.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Некорректный фильтр поиска, возможно из-за синтаксических ошибок, таких как незакрытые скобки или неточные числа. Пожалуйста проверьте.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Произошла ошибка подключения к LDAP / AD, пожалуйста проверьте настройки подключения и учетные данные.",
    "The %uid placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "Отсутствует заполнитель %uid. Он будет заменен на логин при запросе к LDAP / AD.",
    "Please provide a login name to test against" : "Пожалуйста укажите логин для проверки",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "Группа была отключена, так как сервер LDAP / AD не поддерживает memberOf.",
    "_%s group found_::_%s groups found_" : ["%s группа найдена","%s группы найдены","%s групп найдено","%s групп найдено"],
    "_%s user found_::_%s users found_" : ["%s пользователь найден","%s пользователя найдено","%s пользователей найдено","%s пользователей найдено"],
    "Could not detect user display name attribute. Please specify it yourself in advanced ldap settings." : "Не удалось автоматически определить атрибут содержащий отображаемое имя пользователя. Зайдите в расширенные настройки ldap и укажите его вручную.",
    "Could not find the desired feature" : "Не удается найти требуемую функциональность",
    "Invalid Host" : "Некорректный адрес сервера",
    "Server" : "Сервер",
    "Users" : "Пользователи",
    "Login Attributes" : "Учетные данные",
    "Groups" : "Группы",
    "Test Configuration" : "Проверить конфигурацию",
    "Help" : "Помощь",
    "Groups meeting these criteria are available in %s:" : "Группы, отвечающие этим критериям доступны в %s:",
    "Only these object classes:" : "Только эти классы объектов:",
    "Only from these groups:" : "Только из этих групп:",
    "Search groups" : "Поиск групп",
    "Available groups" : "Доступные группы",
    "Selected groups" : "Выбранные группы",
    "Edit LDAP Query" : "Изменить запрос LDAP",
    "LDAP Filter:" : "Фильтр LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Этот фильтр определяет какие LDAP группы должны иметь доступ к экземпляру %s.",
    "Verify settings and count groups" : "Проверить настройки и пересчитать группы",
    "When logging in, %s will find the user based on the following attributes:" : "При входе, %s будет искать пользователя по следующим атрибутам:",
    "LDAP / AD Username:" : "Имя пользователя LDAP/AD:",
    "Allows login against the LDAP / AD username, which is either uid or samaccountname and will be detected." : "Позволяет вход в LDAP / AD с помощью имени пользователя, которое может определяться как uid, так и samaccountname.",
    "LDAP / AD Email Address:" : "Адрес email LDAP / AD:",
    "Allows login against an email attribute. Mail and mailPrimaryAddress will be allowed." : "Позволяет вход с помощью адреса email. Будут разрешены Mail и mailPrimaryAddress.",
    "Other Attributes:" : "Другие атрибуты:",
    "Defines the filter to apply, when login is attempted. %%uid replaces the username in the login action. Example: \"uid=%%uid\"" : "Определяет фильтр для применения при попытке входа. %%uid заменяет имя пользователя при входе в систему. Например: \"uid=%%uid\"",
    "Test Loginname" : "Проверить логин",
    "Verify settings" : "Проверить настройки",
    "1. Server" : "Сервер 1.",
    "%s. Server:" : "Сервер %s:",
    "Copy current configuration into new directory binding" : "Копировать текущую конфигурацию в новую связь с каталогом",
    "Delete the current configuration" : "Удалить текущую конфигурацию",
    "Host" : "Сервер",
    "You can omit the protocol, except you require SSL. Then start with ldaps://" : "Можно пренебречь протоколом, за исключением использования SSL. В этом случае укажите ldaps://",
    "Port" : "Порт",
    "Detect Port" : "Определить порт",
    "User DN" : "DN пользователя",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN пользователя, под которым выполняется подключение, например, uid=agent,dc=example,dc=com. Для анонимного доступа оставьте DN и пароль пустыми.",
    "Password" : "Пароль",
    "For anonymous access, leave DN and Password empty." : "Для анонимного доступа оставьте DN и пароль пустыми.",
    "One Base DN per line" : "По одной базе поиска (Base DN) в строке.",
    "You can specify Base DN for users and groups in the Advanced tab" : "Вы можете задать Base DN для пользователей и групп на вкладке \"Расширенные\"",
    "Detect Base DN" : "Определить базу поиска DN",
    "Test Base DN" : "Проверить базу поиска DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Избегает отправки автоматических запросов LDAP. Эта опция подходит для крупных проектов, но требует некоторых знаний LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "Ввести LDAP фильтры вручную (рекомендуется для больших директорий)",
    "Limit %s access to users meeting these criteria:" : "Ограничить доступ пользователям к %s, удовлетворяющим этому критерию:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Наиболее частые классы объектов для пользователей organizationalPerson, person, user и inetOrgPerson. Если вы не уверены какой класс объектов выбрать, пожалуйста обратитесь к администратору.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Этот фильтр указывает, какие пользователи LDAP должны иметь доступ к экземпляру %s.",
    "Verify settings and count users" : "Проверить настройки и пересчитать пользователей",
    "Saving" : "Сохраняется",
    "Back" : "Назад",
    "Continue" : "Продолжить",
    "LDAP" : "LDAP",
    "Expert" : "Эксперт",
    "Advanced" : "Дополнительно",
    "<b>Warning:</b> Apps user_ldap and user_webdavauth are incompatible. You may experience unexpected behavior. Please ask your system administrator to disable one of them." : "<b>Предупреждение:</b> Приложения user_ldap и user_webdavauth несовместимы. Вы можете наблюдать некорректное поведение. Пожалуйста, попросите вашего системного администратора отключить одно из них.",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Предупреждение:</b> Модуль LDAP для PHP не установлен, бэкенд не будет работать. Пожалуйста, попросите вашего системного администратора его установить. ",
    "Connection Settings" : "Настройки подключения",
    "Configuration Active" : "Конфигурация активна",
    "When unchecked, this configuration will be skipped." : "Когда галочка снята, эта конфигурация будет пропущена.",
    "Backup (Replica) Host" : "Адрес резервного сервера",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Укажите дополнительный резервный сервер. Он должен быть репликой главного LDAP/AD сервера.",
    "Backup (Replica) Port" : "Порт резервного сервера",
    "Disable Main Server" : "Отключить главный сервер",
    "Only connect to the replica server." : "Подключаться только к резервному серверу",
    "Case insensitive LDAP server (Windows)" : "Нечувствительный к регистру сервер LDAP (Windows)",
    "Turn off SSL certificate validation." : "Отключить проверку сертификата SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Не рекомендуется, используйте только в режиме тестирования! Если соединение работает только с этой опцией, импортируйте на ваш %s сервер SSL-сертификат сервера LDAP.",
    "Cache Time-To-Live" : "Кэш времени жизни (TTL)",
    "in seconds. A change empties the cache." : "в секундах. Изменение очистит кэш.",
    "Directory Settings" : "Настройки каталога",
    "User Display Name Field" : "Поле отображаемого имени пользователя",
    "The LDAP attribute to use to generate the user's display name." : "Атрибут LDAP, который используется для генерации отображаемого имени пользователя.",
    "Base User Tree" : "База дерева пользователей",
    "One User Base DN per line" : "По одной базовому DN пользователей в строке.",
    "User Search Attributes" : "Атрибуты поиска пользоватетелей",
    "Optional; one attribute per line" : "Опционально; один атрибут в строке",
    "Group Display Name Field" : "Поле отображаемого имени группы",
    "The LDAP attribute to use to generate the groups's display name." : "Атрибут LDAP, который используется для генерации отображаемого имени группы.",
    "Base Group Tree" : "База дерева групп",
    "One Group Base DN per line" : "По одной базовому DN групп в строке.",
    "Group Search Attributes" : "Атрибуты поиска групп",
    "Group-Member association" : "Ассоциация Группа-Участник",
    "Nested Groups" : "Вложенные группы",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "При включении, активируется поддержка групп, содержащих другие группы. (Работает только если атрибут член группы содержит DN.)",
    "Paging chunksize" : "Страничный размер блоков",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "ChunkSize используется в страничных поисках LDAP которые могут возвращать громоздкие результаты, как например списки пользователей или групп. (Установка значения в \"0\" отключает страничный поиск LDAP для таких ситуаций.)",
    "Special Attributes" : "Специальные атрибуты",
    "Quota Field" : "Поле квоты",
    "Quota Default" : "Квота по умолчанию",
    "in bytes" : "в байтах",
    "Email Field" : "Поле адреса email",
    "User Home Folder Naming Rule" : "Правило именования домашнего каталога пользователя",
    "Leave empty for user name (default). Otherwise, specify an LDAP/AD attribute." : "Оставьте пустым для использования имени пользователя (по умолчанию). Иначе укажите атрибут LDAP/AD.",
    "Internal Username" : "Внутреннее имя пользователя",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. To achieve a similar behavior as before ownCloud 5 enter the user display name attribute in the following field. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "По умолчанию внутреннее имя пользователя будет создано из атрибута UUID. Таким образом имя пользователя становится уникальным и не требует конвертации символов. Внутреннее имя пользователя может состоять только из следующих символов: [ a-zA-Z0-9_.@- ]. Остальные символы заменяются аналогами из таблицы ASCII или же просто пропускаются. В случае конфликта к имени будет добавлено/увеличено число. Внутреннее имя пользователя используется для внутренней идентификации пользователя. Также оно является именем по умолчанию для каталога пользователя в ownCloud. Оно также является частью URL, к примеру, для всех сервисов *DAV. С помощью данной настройки можно изменить поведение по умолчанию. Чтобы достичь поведения, как было до ownCloud 5, введите атрибут отображаемого имени пользователя в этом поле. Оставьте его пустым для режима по умолчанию. Изменения будут иметь эффект только для новых подключенных (добавленных) пользователей LDAP.",
    "Internal Username Attribute:" : "Атрибут для внутреннего имени:",
    "Override UUID detection" : "Переопределить нахождение UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "По умолчанию ownCloud определяет атрибут UUID автоматически. Этот атрибут используется для того, чтобы достоверно идентифицировать пользователей и группы LDAP. Также на основании атрибута UUID создается внутреннее имя пользователя, если выше не указано иначе. Вы можете переопределить эту настройку и указать свой атрибут по выбору. Вы должны удостовериться, что выбранный вами атрибут может быть выбран для пользователей и групп, а также то, что он уникальный. Оставьте поле пустым для поведения по умолчанию. Изменения вступят в силу только для новых подключенных (добавленных) пользователей и групп LDAP.",
    "UUID Attribute for Users:" : "UUID-атрибуты для пользователей:",
    "UUID Attribute for Groups:" : "UUID-атрибуты для групп:",
    "Username-LDAP User Mapping" : "Соответствия Имя-Пользователь LDAP",
    "Usernames are used to store and assign (meta) data. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "ownCloud использует имена пользователей для хранения и назначения метаданных. Для точной идентификации и распознавания пользователей, каждый пользователь LDAP будет иметь свое внутреннее имя пользователя. Это требует привязки имени пользователя ownCloud к пользователю LDAP. При создании имя пользователя назначается идентификатору UUID пользователя LDAP. Помимо этого кешируется доменное имя (DN) для уменьшения числа обращений к LDAP, однако оно не используется для идентификации. Если доменное имя было изменено, об этом станет известно ownCloud. Внутреннее имя ownCloud используется повсеместно в ownCloud. После сброса привязок в базе могут сохраниться остатки старой информации. Сброс привязок не привязан к конфигурации, он повлияет на все LDAP подключения! Ни в коем случае не рекомендуется сбрасывать привязки если система уже находится в эксплуатации, только на этапе тестирования.",
    "Clear Username-LDAP User Mapping" : "Очистить соответствия Имя-Пользователь LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Очистить соответствия Группа-Группа LDAP"
},
"nplurals=4; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);");
