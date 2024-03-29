from django.shortcuts import render
# from django.contrib.auth.forms import UserCreationForm
from users.forms import UserRegisterForm
from django.shortcuts import redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required

# Create your views here.
def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            # messages.success(request, f'Account Created for {username}!')
            messages.success(request, f'Your account has beeen created! You are now able to login')
            return redirect ('login')
    else:
        form = UserRegisterForm()
    return render(request, 'users/register.html', {'form': form})
@login_required
def profile(request):
    return render(request, 'users/profile.html')