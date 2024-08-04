<script setup lang="ts">
interface Props {
  customHandler?: boolean;
}
</script>

<template>
  <div
      class="prev-zone"
  >
    <div class="prev-zone__container">
      <div class="prev-zone__arrow">
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M13.3334 3.33325L6.66671 9.99992L13.3334 16.6666"
              stroke="currentColor"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
        </svg>
      </div>

      <p class="prev-zone__text"> Назад </p>

    </div>
  </div>
</template>

<style scoped lang="scss">
$textColorActive: #5e6875;
.prev-zone {
  display: flex;
  justify-content: left;
  align-items: center;
  position: absolute;
  left: 0;
  top: 48px;
  background-color: #eaebee;
  width: 90px;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s 0.1s;

  &__container {
    height: 36px;
    align-items: center;
    display: flex;
  }

  &__arrow {
    margin: 0 4px;
    color: gray;
    transition: all 0.3s 0.1s;
  }

  &__text {
    color: gray;
    font-weight: 500;
    transition: all 0.3s 0.1s;
  }

  &:hover {
    background: #dfe1e6;
  }

  &:hover .prev-zone__text,
  &:hover .prev-zone__arrow {
    color: $textColorActive;
  }
}
</style>
