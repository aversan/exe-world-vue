<template>
  <Fragment>
    <div class="bg-day-grey-light py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16">Menus Day</h1>
        <div class="space-y-8 flex flex-col">
          <DropdownMenu class="max-w-xxs" static theme="day">
            <div class="py-4">
              <DropdownLink
                v-for="item in items"
                :key="item.id"
                :text="item.text"
                :icon-name="item.iconName"
                :selected="item.selected"
              />
              <DropdownLink
                id="6"
                warning
                icon-name="history-delete"
                text="Delete History"
              />
            </div>
          </DropdownMenu>
          <DropdownMenu class="max-w-md" static theme="day">
            <DropdownHeader action text="Notifications" />
            <DropdownNotificationContainer theme="day">
              <DropdownNotification
                v-for="item in notifications"
                :key="item.id"
                :text="item.text"
                :image="item.image"
                :new="item.new"
              />
            </DropdownNotificationContainer>
          </DropdownMenu>
        </div>
      </div>
    </div>
    <div class="bg-black py-16">
      <div class="container mx-auto">
        <h1 class="h1 mb-16 text-white">Menus Night</h1>
        <div class="space-y-8 flex flex-col">
          <DropdownMenu class="max-w-xxs" static theme="night">
            <div class="py-4">
              <DropdownLink
                v-for="item in items"
                :key="item.id"
                :text="item.text"
                :icon-name="item.iconName"
                :selected="item.selected"
              />
              <DropdownLink
                id="6"
                warning
                icon-name="history-delete"
                text="Delete History"
              />
            </div>
          </DropdownMenu>
          <DropdownMenu class="max-w-md" static theme="night">
            <DropdownHeader action text="Notifications" theme="night" />
            <DropdownNotificationContainer theme="night">
              <DropdownNotification
                v-for="item in notifications"
                :key="item.id"
                :text="item.text"
                :image="item.image"
                :new="item.new"
              />
            </DropdownNotificationContainer>
          </DropdownMenu>
        </div>
      </div>
    </div>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import {
  DropdownMenu,
  DropdownLink,
  DropdownHeader,
  DropdownNotificationContainer,
  DropdownNotification,
} from '@/components/dropdown/index'

export default {
  components: {
    Fragment,
    DropdownMenu,
    DropdownLink,
    DropdownHeader,
    DropdownNotificationContainer,
    DropdownNotification,
  },
  data() {
    return {
      items: [
        { id: '1', iconName: 'stop', text: 'Block User' },
        { id: '2', iconName: 'stop', text: 'Block User', selected: true },
        { id: '3', iconName: 'stop', text: 'Block User' },
        { id: '4', iconName: 'stop', text: 'Block User' },
        { id: '5', iconName: 'stop', text: 'Block User' },
      ],
      notifications: [
        {
          id: '1',
          image: 'http://placehold.it/40x40',
          text: 'A new game "Perfect Fantasy" has been released. Join us.',
        },
        {
          id: '2',
          image: 'http://placehold.it/40x40',
          text: 'A new game "Perfect Fantasy" has been released. Join us.',
          new: true,
        },
        {
          id: '3',
          image: 'http://placehold.it/40x40',
          text: 'A new game "Perfect Fantasy" has been released. Join us.',
        },
        {
          id: '4',
          image: 'http://placehold.it/40x40',
          text: 'A new game "Perfect Fantasy" has been released. Join us.',
        },
        {
          id: '5',
          image: 'http://placehold.it/40x40',
          text: 'A new game "Perfect Fantasy" has been released. Join us.',
        },
        {
          id: '6',
          image: 'http://placehold.it/40x40',
          text: 'A new game "Perfect Fantasy" has been released. Joisdn us.',
        },
      ],
    }
  },
}
</script>
