@component('mail::message')
# New Comment on Your Post

{{ $user->name }} commented on your post "{{ $post->title }}":

"{{ $comment->content }}"

@component('mail::button', ['url' => route('posts.show', $post->id)])
View Comment
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent 