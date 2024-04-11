from djoser.serializers import UserCreateSerializer as BaseUserCreateSerialiser

class UserCreateSearialiser(BaseUserCreateSerialiser):
	class Meta(BaseUserCreateSerialiser.Meta):
		fields = ['id', 'username', 'password', 'email', 'first_name', 'last_name']