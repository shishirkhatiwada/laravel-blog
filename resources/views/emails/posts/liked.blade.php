@component('mail::message')
# New Like on Your Post

{{ $user->name }} liked your post "{{ $post->title }}"!

@component('mail::button', ['url' => route('posts.show', $post->id)])
View Post
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent 