import bus from '@/utils/bus';

export default {
  mounted() {
    bus.$emit('end:spinner');
  },
};
