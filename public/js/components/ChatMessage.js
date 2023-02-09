export default {
  name: 'TheChatMessageComponent',
  props: ['message'],

  template: `
    <article class="chat-messages" :class="{'other-messages' : matchedID }">
      <h3>{{ message.name }} says:</h3>
      <h2>{{ message.content }}</h2>
    </article>
  `,

  data() {
    return {
      message: 'hello from the template', 
      // every time an incoming message arrives, check against the user ID to see if this is ours.
      // if it IS, apply a CSS class to indicate that it's ours.
      // if it ISN'T, apply a different CSS class to make that obvious.
      matchedID: this.$parent.socketID == this.message.id
    }
  }
}