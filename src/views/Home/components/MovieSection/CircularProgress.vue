<script setup lang="ts">
import { computed } from "vue";

type Size = "small" | "medium";

const props = withDefaults(
  defineProps<{
    percentage: number;
    size: Size;
  }>(),
  { size: "small" },
);

const percentageFontSize = computed(() =>
  props.size === "small" ? "text-xs" : "text-xl",
);

const strokeColor = computed<string>(() => {
  if (props.percentage <= 30) return "stroke-red-500";
  if (props.percentage <= 50) return "stroke-yellow-500";

  return "stroke-green-500";
});

const sizes: Record<
  Size,
  {
    strokeWidth: number;
    svg: {
      width: string;
      height: string;
      circle: { cx: string; cy: string; r: string; strokeWidth: number };
    };
    wrapper: {
      width: string;
      height: string;
    };
    outer: {
      padding: string;
      height: string;
      width: string;
    };
    inner: {
      height: string;
      width: string;
    };
  }
> = {
  small: {
    strokeWidth: 118,
    svg: {
      width: "40px",
      height: "40px",
      circle: {
        cx: "20",
        cy: "20",
        r: "17.5",
        strokeWidth: 2,
      },
    },
    wrapper: {
      width: "40px",
      height: "40px",
    },
    outer: {
      padding: "5px",
      width: "40px",
      height: "40px",
    },
    inner: {
      height: "40px",
      width: "40px",
    },
  },
  medium: {
    strokeWidth: 236,
    svg: {
      width: "80px",
      height: "80px",
      circle: {
        strokeWidth: 4,
        cx: "40",
        cy: "40",
        r: "35",
      },
    },
    wrapper: {
      width: "80px",
      height: "80px",
    },
    outer: {
      padding: "10px",
      width: "80px",
      height: "80px",
    },
    inner: {
      height: "80px",
      width: "80px",
    },
  },
};

const currentSize = computed(() => sizes[props.size]);

const fill =
  currentSize.value.strokeWidth -
  (currentSize.value.strokeWidth * props.percentage) / 100;
</script>
<template>
  <div
    class="relative rounded-full bg-zinc-800"
    :style="`width: ${currentSize.wrapper.width}; height:  ${currentSize.wrapper.height}`"
  >
    <div
      class="rounded-full"
      :style="`width: ${currentSize.outer.width}; height: ${currentSize.outer.height}; padding ${currentSize.outer.padding}`"
    >
      <div
        class="flex items-center justify-center rounded-full"
        :style="`height: ${currentSize.inner.height}; width: ${currentSize.inner.width}`"
      >
        <p :class="`${percentageFontSize} font-bold`">{{ percentage }}%</p>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      :width="currentSize.svg.width"
      :height="currentSize.svg.height"
    >
      <defs></defs>
      <circle
        :style="`stroke-dasharray: ${currentSize.strokeWidth}; stroke-dashoffset: ${currentSize.strokeWidth}; stroke-width: ${currentSize.svg.circle.strokeWidth}`"
        :cx="currentSize.svg.circle.cx"
        :cy="currentSize.svg.circle.cy"
        :r="currentSize.svg.circle.r"
        stroke-linecap="round"
        :class="`fill-none ${strokeColor}`"
      />
    </svg>
  </div>
</template>

<style scoped>
circle {
  animation: anim 1s linear forwards;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
}

@keyframes anim {
  100% {
    stroke-dashoffset: v-bind(fill);
  }
}
</style>
