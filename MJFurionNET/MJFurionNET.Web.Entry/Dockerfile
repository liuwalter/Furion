FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 5050

COPY . .
ENTRYPOINT ["dotnet", "MJFurionNET.Web.Entry.dll"]