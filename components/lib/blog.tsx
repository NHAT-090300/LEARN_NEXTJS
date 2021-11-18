import axios from 'axios';
export const getBlogs = async () => {
	try {
		const url: string = 'http://localhost/laravel/public/api/blog';
		const res = await axios.get(url);
		return res.data.blog.data;
	} catch (e) {
		console.log(e);
	}
};
export const getBlogIds = async () => {
	const blogs = await getBlogs();
	return blogs.map((blog) =>({
		params: {
			id: `${blog.id}`,
		},
	}));
};
export const getBlogById = async (id: string) => {
	try {
		const url: string = `http://localhost/laravel/public/api/blog/detail/${id}`
		const res = await axios.get(url);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}