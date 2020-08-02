export const state = () => ({
  menu: [
    {
      title: 'Trang chủ',
      slug: '/'
    },
    {
      title: 'Danh mục dự án',
      slug: '/danh-muc-du-an',
      children: [
        { slug: '/danh-muc-du-an/du-an-a', title: 'Dự án A' },
        { slug: '/danh-muc-du-an/du-an-b', title: 'Dự án B' }
      ]
    },
    {
      title: 'Kế hoạch đầu tư công',
      slug: '/ke-hoach-dau-tu-cong',
      children: [
        {
          slug: '/ke-hoach-dau-tu-cong/nguon-nstw-trong-nuoc',
          title: 'Nguồn NSTW trong nước',
          children: [
            {
              slug: '/ke-hoach-dau-tu-cong/nguon-nstw-trong-nuoc/xay-dung-ke-hoach-dau-tu-cong',
              title: 'Xây dựng kế hoạch đầu tư công'
            },
            {
              slug: '/ke-hoach-dau-tu-cong/nguon-nstw-trong-nuoc/cung-chuyen-muc',
              title: 'Cùng chuyên mục'
            }
          ]
        }
      ]
    },
    {
      title: 'Biểu mẫu báo cáo',
      slug: '/bieu-mau-bao-cao'
    },
    {
      title: 'Báo cáo',
      slug: '/bao-cao'
    },
    {
      title: 'Quản trị',
      slug: '/quan-tri'
    },
    {
      title: 'Trợ giúp',
      slug: '/tro-giup'
    },
    {
      title: 'Hỏi đáp',
      slug: '/hoi-dap'
    }
  ]
})

export const getters = {
  menu: s => s.menu
}
