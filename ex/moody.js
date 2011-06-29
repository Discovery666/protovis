var bike = [
{date:"5/21/2009 14:00:54", name:"phython", duration:7.17, fixed:true},
{date:"5/25/2009 9:03:00", name:"lucas", duration:9.85, fixed:false},
{date:"5/27/2009 8:48:25", name:"lucas", duration:5.3, fixed:false},
{date:"5/27/2009 8:49:42", name:"lucas", duration:7.57, fixed:false},
{date:"5/27/2009 8:50:47", name:"lucas", duration:8.23, fixed:false},
{date:"5/28/2009 9:04:38", name:"lucas", duration:9.3, fixed:false},
{date:"5/28/2009 9:22:05", name:"ben", duration:3.98, fixed:false},
{date:"5/28/2009 10:28:31", name:"dvs", duration:7.5, fixed:false},
{date:"5/28/2009 10:46:03", name:"issao", duration:5, fixed:false},
{date:"5/28/2009 10:49:56", name:"katelyn", duration:6, fixed:false},
{date:"5/28/2009 10:50:29", name:"katelyn", duration:5.75, fixed:false},
{date:"5/28/2009 21:17:25", name:"linam", duration:4.7, fixed:false},
{date:"5/28/2009 21:18:20", name:"linam", duration:5.2, fixed:false},
{date:"5/29/2009 9:30:06", name:"lucas", duration:6.93, fixed:false},
{date:"5/29/2009 9:31:15", name:"lucas", duration:8.23, fixed:false},
{date:"5/30/2009 10:05:57", name:"nnorwitz", duration:7, fixed:false},
{date:"5/30/2009 11:20:18", name:"lucas", duration:13.37, fixed:false},
{date:"5/30/2009 11:20:47", name:"lucas", duration:10.62, fixed:false},
{date:"5/30/2009 11:21:16", name:"lucas", duration:9.25, fixed:false},
{date:"5/30/2009 11:21:43", name:"lucas", duration:8.63, fixed:false},
{date:"5/30/2009 11:22:10", name:"lucas", duration:7.08, fixed:false},
{date:"5/30/2009 11:22:52", name:"lucas", duration:6.43, fixed:false},
{date:"5/30/2009 11:23:31", name:"lucas", duration:8.32, fixed:false},
{date:"5/30/2009 11:24:05", name:"lucas", duration:8.67, fixed:false},
{date:"5/30/2009 11:24:44", name:"lucas", duration:9.08, fixed:false},
{date:"5/30/2009 11:25:10", name:"lucas", duration:9.55, fixed:false},
{date:"5/30/2009 11:25:38", name:"lucas", duration:11.68, fixed:false},
{date:"5/30/2009 16:50:25", name:"kash", duration:4.95, fixed:false},
{date:"5/30/2009 18:27:25", name:"ben", duration:5.12, fixed:false},
{date:"5/30/2009 18:27:55", name:"ben", duration:5.35, fixed:false},
{date:"5/30/2009 18:28:29", name:"ben", duration:5.43, fixed:false},
{date:"5/30/2009 18:32:22", name:"jdischler", duration:5.1, fixed:false},
{date:"5/30/2009 18:33:03", name:"jdischler", duration:5.35, fixed:false},
{date:"5/30/2009 18:33:28", name:"jdischler", duration:5.43333333, fixed:false},
{date:"5/31/2009 9:04:24", name:"lucas", duration:6.67, fixed:false},
{date:"5/31/2009 9:04:45", name:"lucas", duration:7.08, fixed:false},
{date:"5/31/2009 9:05:04", name:"lucas", duration:6.77, fixed:false},
{date:"5/31/2009 9:05:22", name:"lucas", duration:6.97, fixed:false},
{date:"5/31/2009 9:05:45", name:"lucas", duration:7.28, fixed:false},
{date:"5/31/2009 9:06:03", name:"lucas", duration:7.53, fixed:false},
{date:"5/31/2009 9:06:20", name:"lucas", duration:7.05, fixed:false},
{date:"5/31/2009 15:06:45", name:"issao", duration:4.02, fixed:false},
{date:"5/31/2009 15:09:12", name:"issao", duration:6.63, fixed:false},
{date:"5/31/2009 15:11:20", name:"issao", duration:6.12, fixed:false},
{date:"5/31/2009 22:12:58", name:"luiz", duration:6.4333333, fixed:false},
{date:"6/1/2009 15:20:10", name:"katelyn", duration:5.2, fixed:false},
{date:"6/1/2009 15:20:39", name:"katelyn", duration:6.75, fixed:false},
{date:"6/1/2009 15:54:59", name:"nnorwitz", duration:6.75, fixed:false},
{date:"6/1/2009 15:55:11", name:"nnorwitz", duration:7, fixed:false},
{date:"6/4/2009 9:28:13", name:"jdischler", duration:4.2, fixed:false},
{date:"6/4/2009 10:28:53", name:"issao", duration:3.92, fixed:false},
{date:"6/4/2009 10:29:45", name:"luiz", duration:6.16666666, fixed:false},
{date:"6/7/2009 17:36:00", name:"luiz", duration:5.98333, fixed:false},
{date:"6/8/2009 9:16:01", name:"katelyn", duration:5.7, fixed:false},
{date:"6/8/2009 9:17:49", name:"kash", duration:4.85, fixed:false},
{date:"6/8/2009 9:18:24", name:"kash", duration:5.51, fixed:false},
{date:"6/11/2009 9:27:28", name:"luiz", duration:6.45, fixed:false},
{date:"6/11/2009 9:28:13", name:"luiz", duration:6.47, fixed:false},
{date:"6/11/2009 11:50:10", name:"katelyn", duration:5.66, fixed:false},
{date:"6/11/2009 21:05:12", name:"kash", duration:5.25, fixed:false},
{date:"6/12/2009 17:56:06", name:"ben", duration:4.8, fixed:true},
{date:"6/12/2009 18:00:10", name:"ben", duration:6.067, fixed:true},
{date:"6/14/2009 12:57:03", name:"luiz", duration:5.78, fixed:false},
{date:"6/14/2009 12:57:30", name:"luiz", duration:7, fixed:false},
{date:"6/15/2009 9:52:58", name:"issao", duration:4.4, fixed:false},
{date:"6/15/2009 9:53:05", name:"issao", duration:4.7, fixed:false},
{date:"6/18/2009 9:51:19", name:"luiz", duration:5.9, fixed:false},
{date:"6/18/2009 18:44:15", name:"jdischler", duration:4.75, fixed:false},
{date:"6/18/2009 20:22:25", name:"issao", duration:5, fixed:false},
{date:"6/19/2009 12:01:05", name:"etaropa", duration:6.05, fixed:false},
{date:"6/24/2009 17:06:41", name:"dvs", duration:8.5, fixed:false},
{date:"6/25/2009 10:23:40", name:"phython", duration:5.083, fixed:false},
{date:"6/25/2009 10:59:29", name:"katelyn", duration:5.5, fixed:false},
{date:"6/25/2009 13:35:10", name:"luiz", duration:5.66666, fixed:false},
{date:"6/25/2009 20:10:59", name:"jdischler", duration:5, fixed:false},
{date:"6/26/2009 11:39:06", name:"etaropa", duration:5.3, fixed:false},
{date:"7/2/2009 9:07:29", name:"ben", duration:3.85, fixed:false},
{date:"7/2/2009 13:20:04", name:"luiz", duration:5.6666, fixed:false},
{date:"7/2/2009 15:24:22", name:"jdischler", duration:6, fixed:true},
{date:"7/3/2009 12:26:59", name:"kash", duration:4.91, fixed:false},
{date:"7/5/2009 19:31:44", name:"eustace", duration:6.5, fixed:false},
{date:"7/5/2009 19:32:13", name:"eustace", duration:7.4, fixed:false},
{date:"7/8/2009 14:29:49", name:"willchan", duration:5.15, fixed:false},
{date:"7/8/2009 14:30:34", name:"willchan", duration:6, fixed:false},
{date:"7/8/2009 19:16:51", name:"woz", duration:6.5, fixed:false},
{date:"7/9/2009 9:08:40", name:"ben", duration:4.73, fixed:true},
{date:"7/9/2009 14:53:45", name:"woz", duration:7, fixed:false},
{date:"7/9/2009 15:05:52", name:"katelyn", duration:5.4, fixed:false},
{date:"7/9/2009 17:06:12", name:"jdischler", duration:4.4, fixed:false},
{date:"7/9/2009 17:08:45", name:"issao", duration:4.06, fixed:false},
{date:"7/15/2009 6:07:36", name:"luiz", duration:6, fixed:false},
{date:"7/15/2009 6:08:28", name:"luiz", duration:7, fixed:false},
{date:"7/16/2009 9:06:41", name:"ben", duration:3.63, fixed:false},
{date:"7/16/2009 16:55:45", name:"jdischler", duration:4.66666666666667, fixed:false},
{date:"7/16/2009 17:03:24", name:"nnorwitz", duration:6.25, fixed:false},
{date:"7/20/2009 11:47:15", name:"woz", duration:6, fixed:false},
{date:"7/21/2009 8:56:54", name:"luiz", duration:5.6777, fixed:false},
{date:"7/22/2009 10:41:10", name:"phython", duration:5.066, fixed:false},
{date:"7/23/2009 10:57:28", name:"luiz", duration:5.6, fixed:false},
{date:"7/24/2009 13:44:31", name:"issao", duration:3.97, fixed:false},
{date:"7/25/2009 17:59:15", name:"ben", duration:4.1, fixed:false},
{date:"7/25/2009 17:59:31", name:"ben", duration:7.2, fixed:false},
{date:"7/25/2009 17:59:41", name:"ben", duration:4.4, fixed:false},
{date:"7/25/2009 18:00:07", name:"ben", duration:4.8, fixed:false},
{date:"7/25/2009 18:00:33", name:"ben", duration:4.767, fixed:false},
{date:"7/25/2009 18:03:16", name:"luiz", duration:5.6, fixed:false},
{date:"7/25/2009 18:03:28", name:"luiz", duration:7.12, fixed:false},
{date:"7/25/2009 18:03:55", name:"luiz", duration:7.5, fixed:false},
{date:"7/26/2009 11:43:35", name:"woz", duration:5.66667, fixed:false},
{date:"7/26/2009 18:45:22", name:"luiz", duration:5.55, fixed:false},
{date:"7/27/2009 9:17:37", name:"lucas", duration:4.82, fixed:false},
{date:"7/27/2009 9:18:02", name:"lucas", duration:5.33, fixed:false},
{date:"7/27/2009 9:18:27", name:"lucas", duration:5.15, fixed:false},
{date:"7/27/2009 9:18:54", name:"lucas", duration:5.88, fixed:false},
{date:"7/27/2009 9:19:17", name:"lucas", duration:5.45, fixed:false},
{date:"7/28/2009 8:32:10", name:"lucas", duration:6.27, fixed:false},
{date:"7/28/2009 8:32:41", name:"lucas", duration:6.77, fixed:false},
{date:"7/28/2009 8:33:02", name:"lucas", duration:6.67, fixed:false},
{date:"7/28/2009 8:33:28", name:"lucas", duration:6.12, fixed:false},
{date:"7/28/2009 8:33:48", name:"lucas", duration:6.55, fixed:false},
{date:"7/28/2009 8:34:11", name:"lucas", duration:6.1, fixed:false},
{date:"7/29/2009 7:27:05", name:"lucas", duration:6.8, fixed:false},
{date:"7/29/2009 7:27:44", name:"lucas", duration:6.62, fixed:false},
{date:"7/29/2009 7:28:10", name:"lucas", duration:6.92, fixed:false},
{date:"7/29/2009 7:28:25", name:"lucas", duration:6.62, fixed:false},
{date:"7/29/2009 7:28:46", name:"lucas", duration:6.85, fixed:false},
{date:"7/29/2009 21:16:28", name:"lucas", duration:5.12, fixed:false},
{date:"7/29/2009 21:16:55", name:"lucas", duration:7.03, fixed:false},
{date:"7/29/2009 21:17:14", name:"lucas", duration:6.95, fixed:false},
{date:"7/29/2009 21:17:33", name:"lucas", duration:6.5, fixed:false},
{date:"7/29/2009 21:17:58", name:"lucas", duration:5.35, fixed:false},
{date:"7/29/2009 21:18:24", name:"lucas", duration:8.32, fixed:false},
{date:"7/29/2009 21:18:54", name:"lucas", duration:7.47, fixed:false},
{date:"7/29/2009 21:20:19", name:"lucas", duration:6.35, fixed:false},
{date:"7/30/2009 9:07:05", name:"lucas", duration:5.37, fixed:false},
{date:"7/30/2009 9:18:39", name:"ben", duration:3.917, fixed:false},
{date:"7/30/2009 9:51:06", name:"eustace", duration:5.7, fixed:false},
{date:"7/30/2009 9:52:18", name:"eustace", duration:5.78, fixed:false},
{date:"7/30/2009 10:38:54", name:"gauthamt", duration:8.3, fixed:false},
{date:"7/30/2009 10:42:48", name:"nnorwitz", duration:6.28333333, fixed:false},
{date:"7/30/2009 11:08:22", name:"etaropa", duration:5.4, fixed:false},
{date:"8/4/2009 10:42:41", name:"woz", duration:5.617, fixed:false},
{date:"8/6/2009 8:58:59", name:"phython", duration:4.65, fixed:false},
{date:"8/13/2009 20:46:49", name:"georgelee", duration:5.13, fixed:false},
{date:"8/15/2009 7:12:14", name:"luiz", duration:5.48, fixed:false},
{date:"8/17/2009 10:58:30", name:"nnorwitz", duration:5.76666666666667, fixed:false},
{date:"8/17/2009 11:39:55", name:"woz", duration:5.75, fixed:false},
{date:"8/20/2009 9:09:27", name:"ben", duration:3.62, fixed:false},
{date:"8/20/2009 10:17:07", name:"nnorwitz", duration:5.35, fixed:false},
{date:"8/20/2009 10:25:20", name:"luiz", duration:5.28, fixed:false},
{date:"8/20/2009 11:16:57", name:"etaropa", duration:5.05, fixed:false},
{date:"8/20/2009 11:20:37", name:"issao", duration:3.92, fixed:false},
{date:"8/20/2009 12:10:20", name:"jdischler", duration:5.1, fixed:false},
{date:"8/22/2009 12:50:07", name:"luiz", duration:6.5, fixed:false},
{date:"8/23/2009 14:12:53", name:"diane", duration:8.5, fixed:false},
{date:"8/23/2009 14:13:08", name:"diane", duration:8.75, fixed:false},
{date:"8/23/2009 14:15:16", name:"ben", duration:4.5167, fixed:false},
{date:"8/23/2009 14:16:08", name:"ben", duration:4.6167, fixed:false},
{date:"8/23/2009 14:16:35", name:"ben", duration:4.7167, fixed:false},
{date:"8/23/2009 14:16:54", name:"ben", duration:4.8833, fixed:false},
{date:"8/23/2009 14:17:12", name:"ben", duration:4.8667, fixed:false},
{date:"8/23/2009 14:17:25", name:"ben", duration:4.75, fixed:false},
{date:"8/23/2009 14:17:59", name:"ben", duration:4.6833, fixed:false},
{date:"8/23/2009 14:18:09", name:"ben", duration:4.9333, fixed:false},
{date:"8/23/2009 14:18:26", name:"ben", duration:4.9167, fixed:false},
{date:"8/24/2009 6:49:54", name:"lucas", duration:6.48, fixed:false},
{date:"8/24/2009 6:50:14", name:"lucas", duration:6.28, fixed:false},
{date:"8/24/2009 6:50:27", name:"lucas", duration:5.28, fixed:false},
{date:"8/24/2009 6:50:43", name:"lucas", duration:6.52, fixed:false},
{date:"8/24/2009 6:50:56", name:"lucas", duration:6.6, fixed:false},
{date:"8/24/2009 6:51:16", name:"lucas", duration:6.47, fixed:false},
{date:"8/24/2009 6:51:29", name:"lucas", duration:5.78, fixed:false},
{date:"8/24/2009 20:23:40", name:"ben", duration:4.3167, fixed:false},
{date:"8/24/2009 20:24:02", name:"ben", duration:4.6667, fixed:false},
{date:"8/24/2009 20:24:14", name:"ben", duration:4.75, fixed:false},
{date:"8/24/2009 20:24:41", name:"ben", duration:4.8, fixed:false},
{date:"8/24/2009 20:24:58", name:"ben", duration:4.8333, fixed:false},
{date:"8/24/2009 21:20:21", name:"lucas", duration:5.72, fixed:false},
{date:"8/24/2009 21:20:36", name:"lucas", duration:5.67, fixed:false},
{date:"8/24/2009 21:20:52", name:"lucas", duration:6.07, fixed:false},
{date:"8/24/2009 21:21:17", name:"lucas", duration:5.77, fixed:false},
{date:"8/24/2009 21:21:46", name:"lucas", duration:6.12, fixed:false},
{date:"8/24/2009 21:22:03", name:"lucas", duration:5.97, fixed:false},
{date:"8/24/2009 21:22:23", name:"lucas", duration:6.33, fixed:false},
{date:"8/24/2009 21:22:41", name:"lucas", duration:6.08, fixed:false},
{date:"8/24/2009 21:22:52", name:"lucas", duration:6.17, fixed:false},
{date:"8/24/2009 21:23:07", name:"lucas", duration:6.27, fixed:false},
{date:"8/24/2009 21:23:25", name:"lucas", duration:5.6, fixed:false},
{date:"8/25/2009 7:59:01", name:"lucas", duration:6.63, fixed:false},
{date:"8/25/2009 7:59:17", name:"lucas", duration:7.28, fixed:false},
{date:"8/25/2009 7:59:31", name:"lucas", duration:7.78, fixed:false},
{date:"8/25/2009 7:59:54", name:"lucas", duration:7.32, fixed:false},
{date:"8/25/2009 8:00:04", name:"lucas", duration:7.85, fixed:false},
{date:"8/25/2009 8:00:47", name:"lucas", duration:8.3, fixed:false},
{date:"8/25/2009 8:00:57", name:"lucas", duration:8.23, fixed:false},
{date:"8/25/2009 8:51:43", name:"jdischler", duration:4.4, fixed:false},
{date:"8/25/2009 8:52:06", name:"jdischler", duration:4.5, fixed:false},
{date:"8/25/2009 8:54:19", name:"jdischler", duration:4.5, fixed:false},
{date:"8/25/2009 8:54:43", name:"jdischler", duration:4.97, fixed:false},
{date:"8/25/2009 8:55:08", name:"jdischler", duration:5.55, fixed:false},
{date:"8/25/2009 9:16:14", name:"luiz", duration:5.75, fixed:false},
{date:"8/25/2009 9:16:29", name:"luiz", duration:5.8, fixed:false},
{date:"8/25/2009 9:16:38", name:"luiz", duration:7.1, fixed:false},
{date:"8/25/2009 9:16:58", name:"luiz", duration:6.82, fixed:false},
{date:"8/25/2009 9:28:07", name:"ben", duration:4.6833, fixed:false},
{date:"8/25/2009 9:28:22", name:"ben", duration:4.5333, fixed:false},
{date:"8/25/2009 9:28:39", name:"ben", duration:4.5167, fixed:false},
{date:"8/25/2009 9:29:06", name:"ben", duration:4.7667, fixed:false},
{date:"8/25/2009 9:29:40", name:"ben", duration:4.8667, fixed:false},
{date:"8/25/2009 9:29:58", name:"ben", duration:4.8667, fixed:false},
{date:"8/25/2009 9:30:16", name:"ben", duration:4.7833, fixed:false},
{date:"8/25/2009 9:30:27", name:"ben", duration:4.9, fixed:false},
{date:"8/25/2009 9:30:41", name:"ben", duration:4.9, fixed:false},
{date:"8/25/2009 9:30:55", name:"ben", duration:4.8667, fixed:false},
{date:"8/25/2009 20:03:52", name:"ben", duration:4.65, fixed:false},
{date:"8/25/2009 20:05:07", name:"ben", duration:4.6667, fixed:false},
{date:"8/25/2009 20:05:27", name:"ben", duration:4.8, fixed:false},
{date:"8/25/2009 20:06:05", name:"ben", duration:4.8167, fixed:false},
{date:"8/25/2009 20:06:35", name:"ben", duration:4.8667, fixed:false},
{date:"8/25/2009 20:06:53", name:"ben", duration:4.9667, fixed:false},
{date:"8/25/2009 20:07:24", name:"ben", duration:5.0167, fixed:false},
{date:"8/25/2009 20:07:51", name:"ben", duration:4.95, fixed:false},
{date:"8/25/2009 20:08:24", name:"ben", duration:4.95, fixed:false},
{date:"8/25/2009 20:09:48", name:"ben", duration:4.55, fixed:false},
{date:"8/25/2009 20:15:01", name:"issao", duration:4.65, fixed:false},
{date:"8/25/2009 20:15:29", name:"issao", duration:4.6667, fixed:false},
{date:"8/25/2009 20:15:48", name:"issao", duration:5.8, fixed:false},
{date:"8/25/2009 20:16:10", name:"issao", duration:4.8667, fixed:false},
{date:"8/25/2009 20:17:05", name:"issao", duration:4.9667, fixed:false},
{date:"8/25/2009 20:17:24", name:"issao", duration:6, fixed:false},
{date:"8/25/2009 20:17:41", name:"issao", duration:4.95, fixed:false},
{date:"8/25/2009 20:17:44", name:"issao", duration:4.95, fixed:false},
{date:"8/25/2009 20:18:04", name:"issao", duration:5.9, fixed:false},
{date:"8/25/2009 22:25:17", name:"lucas", duration:6.5, fixed:false},
{date:"8/25/2009 22:25:39", name:"lucas", duration:5.72, fixed:false},
{date:"8/25/2009 22:25:59", name:"lucas", duration:5.6, fixed:false},
{date:"8/25/2009 22:26:20", name:"lucas", duration:5.62, fixed:false},
{date:"8/25/2009 22:26:53", name:"lucas", duration:8.33, fixed:false},
{date:"8/25/2009 22:27:12", name:"lucas", duration:6.48, fixed:false},
{date:"8/25/2009 22:27:29", name:"lucas", duration:6.05, fixed:false},
{date:"8/25/2009 22:27:42", name:"lucas", duration:6.9, fixed:false},
{date:"8/25/2009 22:28:00", name:"lucas", duration:7.73, fixed:false},
{date:"8/25/2009 22:28:21", name:"lucas", duration:8.17, fixed:false},
{date:"8/25/2009 22:28:34", name:"lucas", duration:6.55, fixed:false},
{date:"8/25/2009 22:29:03", name:"lucas", duration:7.63, fixed:false},
{date:"8/25/2009 22:29:28", name:"lucas", duration:7.78, fixed:false},
{date:"8/25/2009 22:29:39", name:"lucas", duration:7.02, fixed:false},
{date:"8/25/2009 22:30:01", name:"lucas", duration:8.08, fixed:false},
{date:"8/27/2009 9:18:30", name:"luiz", duration:5.1, fixed:false},
{date:"8/27/2009 9:37:13", name:"jdischler", duration:4.4, fixed:false},
{date:"8/27/2009 10:23:22", name:"gauthamt", duration:7.2, fixed:false},
{date:"8/29/2009 8:53:02", name:"luiz", duration:5.54, fixed:false},
{date:"8/29/2009 8:53:30", name:"luiz", duration:5.9, fixed:false},
{date:"8/29/2009 10:56:55", name:"gauthamt", duration:6.5, fixed:false},
{date:"8/30/2009 22:24:42", name:"gauthamt", duration:5.8, fixed:false},
{date:"8/30/2009 23:52:41", name:"weitzman", duration:6.58, fixed:false},
{date:"8/31/2009 8:57:23", name:"jdischler", duration:4.67, fixed:false},
{date:"8/31/2009 8:57:37", name:"jdischler", duration:5, fixed:false},
{date:"8/31/2009 8:58:00", name:"jdischler", duration:5.02, fixed:false},
{date:"8/31/2009 8:58:50", name:"jdischler", duration:5.42, fixed:false},
{date:"8/31/2009 10:26:52", name:"dbaylor", duration:4.93, fixed:false},
{date:"8/31/2009 21:14:07", name:"nnorwitz", duration:5.25, fixed:false},
{date:"9/2/2009 0:28:03", name:"issao", duration:4.667, fixed:false},
{date:"9/3/2009 9:41:32", name:"gauthamt", duration:6.1, fixed:false},
{date:"9/5/2009 12:32:39", name:"gauthamt", duration:6.2, fixed:false},
{date:"9/7/2009 22:20:39", name:"luiz", duration:5.75, fixed:false},
{date:"9/7/2009 22:22:01", name:"luiz", duration:6.1, fixed:false},
{date:"9/7/2009 22:24:08", name:"luiz", duration:5.17, fixed:false},
{date:"9/7/2009 22:25:22", name:"luiz", duration:6.11, fixed:false},
{date:"9/7/2009 22:26:04", name:"luiz", duration:7.45, fixed:false},
{date:"9/7/2009 22:26:57", name:"luiz", duration:6.87, fixed:false}
];
