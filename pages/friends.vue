<template>
  <Fragment>
    <div class="bg-day-grey-light py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16">Friends Day</h1>
        <FriendContainer theme="day">
          <FriendItem status="accepted" theme="day" />
          <FriendItem status="waiting-answer" theme="day" />
          <FriendItem status="send-request" theme="day" />
        </FriendContainer>
      </div>
    </div>
    <div class="bg-black py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16 text-white">Friends Night</h1>
        <FriendContainer theme="night">
          <FriendItem status="accepted" theme="night" />
          <FriendItem status="waiting-answer" theme="night" />
          <FriendItem status="send-request" theme="night" />
        </FriendContainer>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { FriendContainer, FriendItem } from '@/components/friends/index'

export default {
  components: {
    Fragment,
    FriendContainer,
    FriendItem,
  },
}
</script>
