import {
	func
} from './config.js'
const http = (argus) => {
	return new Promise((resolve, reject) => {
		uni.request({
			method: argus.method || 'post',
			url: `${func()}${argus.url}`,
			data: argus.data,
			header: {
				// 'token': 'f5c6/3H2DlOCW8QtljhPJnGguanII2cLGRNaYfnk' //自定义请求头信息
			},
			success: (res) => {
				// console.log(res)
				res = res.data
				if (res.code == 0) {
					resolve(res)
				} else {
					uni.showToast({
						title: res.message,
						icon: 'none',
						duration: 1500
					})
				}
			},
			fail: (err) => {
				let data = err.data
				reject(data)
				let code = data.code
				switch (code) {
					case 1:
						// do sth
						break;
				}
			},
			complete: () => {
				setTimeout(() => {
					uni.hideLoading()
				}, 300)
			}
		})
	})
}

export default http
