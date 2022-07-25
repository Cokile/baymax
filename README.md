### Baymax
Baymax is a "just for fun" chatbot developed with [wechaty](https://github.com/wechaty/wechaty) and [padlocal](https://github.com/wechaty/puppet-padlocal) puppet to make WeChat great again and learn TypeScript.

For more information about baymax, please visit the [blog post](https://corer.notion.site/Make-WeChat-Great-Again-101bd5c97ed045f788ca29b3bb6d93ed).

### Features

- message commands

  - baike: shows overview of the query.
  - pet: shows a picture of cute pet.
  - quote: creates a image with the message text as quote.
  - id: get id for user and group.
  - help: shows the help message for baymax.

- cron commands

  - birthday: send happy birthday text.
  - cat: send cute cat picture.
  - reminder: send general reminder text.
  - weather: send weather report.

- recallless group chat

  Baymax will echo the recalled message back.

### Bootstrap

1. make sure you have [node.js](https://nodejs.org/en/download/package-manager/) installed.

2. Create a config file named `config.json` from sample config and edit it as you need:

   ```bash
   cp config/sample_config.json config/config.json
   ```

   Check `config/config.schema.json` as a reference for configuration.

3. install dependencies

   ```bash
   npm install
   ```

3. Compile baymax

   ```bash
   npm run build
   ```

4. Run baymax

   ```bash
   npm run dev-start
   ```

   
